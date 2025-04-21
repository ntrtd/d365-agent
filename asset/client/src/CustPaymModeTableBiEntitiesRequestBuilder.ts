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
import { CustPaymModeTableBiEntities } from './CustPaymModeTableBiEntities';

/**
 * Request builder class for operations supported on the {@link CustPaymModeTableBiEntities} entity.
 */
export class CustPaymModeTableBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustPaymModeTableBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `CustPaymModeTableBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `CustPaymModeTableBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<CustPaymModeTableBiEntities<T>, T> {
    return new GetAllRequestBuilder<CustPaymModeTableBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CustPaymModeTableBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustPaymModeTableBiEntities`.
   */
  create(
    entity: CustPaymModeTableBiEntities<T>
  ): CreateRequestBuilder<CustPaymModeTableBiEntities<T>, T> {
    return new CreateRequestBuilder<CustPaymModeTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustPaymModeTableBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustPaymModeTableBiEntities.dataAreaId}.
   * @param paymMode Key property. See {@link CustPaymModeTableBiEntities.paymMode}.
   * @returns A request builder for creating requests to retrieve one `CustPaymModeTableBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    paymMode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustPaymModeTableBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<CustPaymModeTableBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PaymMode: paymMode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustPaymModeTableBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustPaymModeTableBiEntities`.
   */
  update(
    entity: CustPaymModeTableBiEntities<T>
  ): UpdateRequestBuilder<CustPaymModeTableBiEntities<T>, T> {
    return new UpdateRequestBuilder<CustPaymModeTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustPaymModeTableBiEntities`.
   * @param dataAreaId Key property. See {@link CustPaymModeTableBiEntities.dataAreaId}.
   * @param paymMode Key property. See {@link CustPaymModeTableBiEntities.paymMode}.
   * @returns A request builder for creating requests that delete an entity of type `CustPaymModeTableBiEntities`.
   */
  delete(
    dataAreaId: string,
    paymMode: string
  ): DeleteRequestBuilder<CustPaymModeTableBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustPaymModeTableBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustPaymModeTableBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: CustPaymModeTableBiEntities<T>
  ): DeleteRequestBuilder<CustPaymModeTableBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    paymMode?: string
  ): DeleteRequestBuilder<CustPaymModeTableBiEntities<T>, T> {
    return new DeleteRequestBuilder<CustPaymModeTableBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustPaymModeTableBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PaymMode: paymMode!
          }
    );
  }
}
