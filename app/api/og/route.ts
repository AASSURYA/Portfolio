import { NextRequest, NextResponse } from "next/server"
import { ImageResponse } from "next/og"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get("slug")

  try {
    if (slug) {
      // Generate OG image for specific project
      return new ImageResponse(
        (
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#000",
              backgroundImage: "linear-gradient(45deg, #1a1a1a 0%, #2d2d2d 100%)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "60px",
                textAlign: "center",
              }}
            >
              <h1
                style={{
                  fontSize: "72px",
                  fontWeight: "bold",
                  color: "#fff",
                  marginBottom: "20px",
                }}
              >
                {slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, " ")}
              </h1>
              <p
                style={{
                  fontSize: "24px",
                  color: "#a0a0a0",
                }}
              >
                Portfolio Project
              </p>
            </div>
          </div>
        ),
        {
          width: 1200,
          height: 630,
        }
      )
    } else {
      // Generate OG image for home page
      return new ImageResponse(
        (
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#000",
              backgroundImage: "linear-gradient(45deg, #1a1a1a 0%, #2d2d2d 100%)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "60px",
                textAlign: "center",
              }}
            >
              <h1
                style={{
                  fontSize: "72px",
                  fontWeight: "bold",
                  color: "#fff",
                  marginBottom: "20px",
                }}
              >
                Portfolio
              </h1>
              <p
                style={{
                  fontSize: "24px",
                  color: "#a0a0a0",
                }}
              >
                {{YOUR_NAME}} - {{YOUR_ROLE_TAGLINE}}
              </p>
            </div>
          </div>
        ),
        {
          width: 1200,
          height: 630,
        }
      )
    }
  } catch (error) {
    console.error("Error generating OG image:", error)
    return new NextResponse("Failed to generate image", { status: 500 })
  }
}
