/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { RetailTillLayoutImages } from './RetailTillLayoutImages';

/**
 * Request builder class for operations supported on the {@link RetailTillLayoutImages} entity.
 */
export class RetailTillLayoutImagesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTillLayoutImages<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTillLayoutImages` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTillLayoutImages` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTillLayoutImages<T>, T> {
    return new GetAllRequestBuilder<RetailTillLayoutImages<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTillLayoutImages` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTillLayoutImages`.
   */
  create(
    entity: RetailTillLayoutImages<T>
  ): CreateRequestBuilder<RetailTillLayoutImages<T>, T> {
    return new CreateRequestBuilder<RetailTillLayoutImages<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTillLayoutImages` entity based on its keys.
   * @param layoutId Key property. See {@link RetailTillLayoutImages.layoutId}.
   * @param pictureId Key property. See {@link RetailTillLayoutImages.pictureId}.
   * @param zoneId Key property. See {@link RetailTillLayoutImages.zoneId}.
   * @param layoutSizeId Key property. See {@link RetailTillLayoutImages.layoutSizeId}.
   * @returns A request builder for creating requests to retrieve one `RetailTillLayoutImages` entity based on its keys.
   */
  getByKey(
    layoutId: DeserializedType<T, 'Edm.String'>,
    pictureId: DeserializedType<T, 'Edm.Int32'>,
    zoneId: DeserializedType<T, 'Edm.String'>,
    layoutSizeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTillLayoutImages<T>, T> {
    return new GetByKeyRequestBuilder<RetailTillLayoutImages<T>, T>(
      this.entityApi,
      {
        LayoutId: layoutId,
        PictureId: pictureId,
        ZoneId: zoneId,
        LayoutSizeId: layoutSizeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTillLayoutImages`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTillLayoutImages`.
   */
  update(
    entity: RetailTillLayoutImages<T>
  ): UpdateRequestBuilder<RetailTillLayoutImages<T>, T> {
    return new UpdateRequestBuilder<RetailTillLayoutImages<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTillLayoutImages`.
   * @param layoutId Key property. See {@link RetailTillLayoutImages.layoutId}.
   * @param pictureId Key property. See {@link RetailTillLayoutImages.pictureId}.
   * @param zoneId Key property. See {@link RetailTillLayoutImages.zoneId}.
   * @param layoutSizeId Key property. See {@link RetailTillLayoutImages.layoutSizeId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTillLayoutImages`.
   */
  delete(
    layoutId: string,
    pictureId: number,
    zoneId: string,
    layoutSizeId: string
  ): DeleteRequestBuilder<RetailTillLayoutImages<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTillLayoutImages`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTillLayoutImages` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTillLayoutImages<T>
  ): DeleteRequestBuilder<RetailTillLayoutImages<T>, T>;
  delete(
    layoutIdOrEntity: any,
    pictureId?: number,
    zoneId?: string,
    layoutSizeId?: string
  ): DeleteRequestBuilder<RetailTillLayoutImages<T>, T> {
    return new DeleteRequestBuilder<RetailTillLayoutImages<T>, T>(
      this.entityApi,
      layoutIdOrEntity instanceof RetailTillLayoutImages
        ? layoutIdOrEntity
        : {
            LayoutId: layoutIdOrEntity!,
            PictureId: pictureId!,
            ZoneId: zoneId!,
            LayoutSizeId: layoutSizeId!
          }
    );
  }
}
