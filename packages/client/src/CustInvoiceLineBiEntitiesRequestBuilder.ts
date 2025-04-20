/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { CustInvoiceLineBiEntities } from './CustInvoiceLineBiEntities';

/**
 * Request builder class for operations supported on the {@link CustInvoiceLineBiEntities} entity.
 */
export class CustInvoiceLineBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustInvoiceLineBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `CustInvoiceLineBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `CustInvoiceLineBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<CustInvoiceLineBiEntities<T>, T> {
    return new GetAllRequestBuilder<CustInvoiceLineBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CustInvoiceLineBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustInvoiceLineBiEntities`.
   */
  create(
    entity: CustInvoiceLineBiEntities<T>
  ): CreateRequestBuilder<CustInvoiceLineBiEntities<T>, T> {
    return new CreateRequestBuilder<CustInvoiceLineBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustInvoiceLineBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustInvoiceLineBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link CustInvoiceLineBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `CustInvoiceLineBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<CustInvoiceLineBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<CustInvoiceLineBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceKey: sourceKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustInvoiceLineBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustInvoiceLineBiEntities`.
   */
  update(
    entity: CustInvoiceLineBiEntities<T>
  ): UpdateRequestBuilder<CustInvoiceLineBiEntities<T>, T> {
    return new UpdateRequestBuilder<CustInvoiceLineBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustInvoiceLineBiEntities`.
   * @param dataAreaId Key property. See {@link CustInvoiceLineBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link CustInvoiceLineBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `CustInvoiceLineBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<CustInvoiceLineBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustInvoiceLineBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustInvoiceLineBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: CustInvoiceLineBiEntities<T>
  ): DeleteRequestBuilder<CustInvoiceLineBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<CustInvoiceLineBiEntities<T>, T> {
    return new DeleteRequestBuilder<CustInvoiceLineBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustInvoiceLineBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
