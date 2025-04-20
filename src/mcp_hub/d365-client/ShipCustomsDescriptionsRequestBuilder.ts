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
import { ShipCustomsDescriptions } from './ShipCustomsDescriptions';

/**
 * Request builder class for operations supported on the {@link ShipCustomsDescriptions} entity.
 */
export class ShipCustomsDescriptionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ShipCustomsDescriptions<T>, T> {
  /**
   * Returns a request builder for querying all `ShipCustomsDescriptions` entities.
   * @returns A request builder for creating requests to retrieve all `ShipCustomsDescriptions` entities.
   */
  getAll(): GetAllRequestBuilder<ShipCustomsDescriptions<T>, T> {
    return new GetAllRequestBuilder<ShipCustomsDescriptions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ShipCustomsDescriptions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ShipCustomsDescriptions`.
   */
  create(
    entity: ShipCustomsDescriptions<T>
  ): CreateRequestBuilder<ShipCustomsDescriptions<T>, T> {
    return new CreateRequestBuilder<ShipCustomsDescriptions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ShipCustomsDescriptions` entity based on its keys.
   * @param dataAreaId Key property. See {@link ShipCustomsDescriptions.dataAreaId}.
   * @param customsDescription Key property. See {@link ShipCustomsDescriptions.customsDescription}.
   * @returns A request builder for creating requests to retrieve one `ShipCustomsDescriptions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    customsDescription: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ShipCustomsDescriptions<T>, T> {
    return new GetByKeyRequestBuilder<ShipCustomsDescriptions<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CustomsDescription: customsDescription
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ShipCustomsDescriptions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ShipCustomsDescriptions`.
   */
  update(
    entity: ShipCustomsDescriptions<T>
  ): UpdateRequestBuilder<ShipCustomsDescriptions<T>, T> {
    return new UpdateRequestBuilder<ShipCustomsDescriptions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ShipCustomsDescriptions`.
   * @param dataAreaId Key property. See {@link ShipCustomsDescriptions.dataAreaId}.
   * @param customsDescription Key property. See {@link ShipCustomsDescriptions.customsDescription}.
   * @returns A request builder for creating requests that delete an entity of type `ShipCustomsDescriptions`.
   */
  delete(
    dataAreaId: string,
    customsDescription: string
  ): DeleteRequestBuilder<ShipCustomsDescriptions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ShipCustomsDescriptions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ShipCustomsDescriptions` by taking the entity as a parameter.
   */
  delete(
    entity: ShipCustomsDescriptions<T>
  ): DeleteRequestBuilder<ShipCustomsDescriptions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    customsDescription?: string
  ): DeleteRequestBuilder<ShipCustomsDescriptions<T>, T> {
    return new DeleteRequestBuilder<ShipCustomsDescriptions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ShipCustomsDescriptions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CustomsDescription: customsDescription!
          }
    );
  }
}
