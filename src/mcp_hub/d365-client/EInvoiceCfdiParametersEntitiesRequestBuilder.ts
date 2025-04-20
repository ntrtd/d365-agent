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
import { EInvoiceCfdiParametersEntities } from './EInvoiceCfdiParametersEntities';

/**
 * Request builder class for operations supported on the {@link EInvoiceCfdiParametersEntities} entity.
 */
export class EInvoiceCfdiParametersEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EInvoiceCfdiParametersEntities<T>, T> {
  /**
   * Returns a request builder for querying all `EInvoiceCfdiParametersEntities` entities.
   * @returns A request builder for creating requests to retrieve all `EInvoiceCfdiParametersEntities` entities.
   */
  getAll(): GetAllRequestBuilder<EInvoiceCfdiParametersEntities<T>, T> {
    return new GetAllRequestBuilder<EInvoiceCfdiParametersEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EInvoiceCfdiParametersEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EInvoiceCfdiParametersEntities`.
   */
  create(
    entity: EInvoiceCfdiParametersEntities<T>
  ): CreateRequestBuilder<EInvoiceCfdiParametersEntities<T>, T> {
    return new CreateRequestBuilder<EInvoiceCfdiParametersEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EInvoiceCfdiParametersEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link EInvoiceCfdiParametersEntities.dataAreaId}.
   * @param key Key property. See {@link EInvoiceCfdiParametersEntities.key}.
   * @returns A request builder for creating requests to retrieve one `EInvoiceCfdiParametersEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    key: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<EInvoiceCfdiParametersEntities<T>, T> {
    return new GetByKeyRequestBuilder<EInvoiceCfdiParametersEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Key: key
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EInvoiceCfdiParametersEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EInvoiceCfdiParametersEntities`.
   */
  update(
    entity: EInvoiceCfdiParametersEntities<T>
  ): UpdateRequestBuilder<EInvoiceCfdiParametersEntities<T>, T> {
    return new UpdateRequestBuilder<EInvoiceCfdiParametersEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EInvoiceCfdiParametersEntities`.
   * @param dataAreaId Key property. See {@link EInvoiceCfdiParametersEntities.dataAreaId}.
   * @param key Key property. See {@link EInvoiceCfdiParametersEntities.key}.
   * @returns A request builder for creating requests that delete an entity of type `EInvoiceCfdiParametersEntities`.
   */
  delete(
    dataAreaId: string,
    key: number
  ): DeleteRequestBuilder<EInvoiceCfdiParametersEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EInvoiceCfdiParametersEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EInvoiceCfdiParametersEntities` by taking the entity as a parameter.
   */
  delete(
    entity: EInvoiceCfdiParametersEntities<T>
  ): DeleteRequestBuilder<EInvoiceCfdiParametersEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    key?: number
  ): DeleteRequestBuilder<EInvoiceCfdiParametersEntities<T>, T> {
    return new DeleteRequestBuilder<EInvoiceCfdiParametersEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof EInvoiceCfdiParametersEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Key: key!
          }
    );
  }
}
