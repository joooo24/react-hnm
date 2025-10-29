import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const { id } = useParams()

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const baseUrl = import.meta.env.VITE_API_BASE_URL
                const response = await fetch(`${baseUrl}/products/${id}`)
                if (!response.ok) throw new Error('Failed to fetch product')
                const data = await response.json()
                setProduct(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchProduct()
    }, [id])

    if (loading) return <div>로딩 중…</div>
    if (error) return <div>에러: {error}</div>
    if (!product) return <div>상품이 없습니다.</div>

    return (
        <div className="product-detail">
            <div className="img-wrap">
                <img src={product?.img} alt={product?.title || 'product'} />
            </div>
            <div className="info">
                <h1>{product?.title}</h1>
                <p>₩{product?.price}</p>
                {product?.new && <span>신제품</span>}
            </div>
        </div>
    )
}

export default ProductDetail
