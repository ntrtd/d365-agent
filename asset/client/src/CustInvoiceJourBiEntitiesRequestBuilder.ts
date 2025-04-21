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
import { CustInvoiceJourBiEntities } from './CustInvoiceJourBiEntities';

/**
 * Request builder class for operations supported on the {@link CustInvoiceJourBiEntities} entity.
 */
export class CustInvoiceJourBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustInvoiceJourBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `CustInvoiceJourBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `CustInvoiceJourBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<CustInvoiceJourBiEntities<T>, T> {
    return new GetAllRequestBuilder<CustInvoiceJourBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CustInvoiceJourBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustInvoiceJourBiEntities`.
   */
  create(
    entity: CustInvoiceJourBiEntities<T>
  ): CreateRequestBuilder<CustInvoiceJourBiEntities<T>, T> {
    return new CreateRequestBuilder<CustInvoiceJourBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustInvoiceJourBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustInvoiceJourBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link CustInvoiceJourBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `CustInvoiceJourBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<CustInvoiceJourBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<CustInvoiceJourBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceKey: sourceKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustInvoiceJourBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustInvoiceJourBiEntities`.
   */
  update(
    entity: CustInvoiceJourBiEntities<T>
  ): UpdateRequestBuilder<CustInvoiceJourBiEntities<T>, T> {
    return new UpdateRequestBuilder<CustInvoiceJourBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustInvoiceJourBiEntities`.
   * @param dataAreaId Key property. See {@link CustInvoiceJourBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link CustInvoiceJourBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `CustInvoiceJourBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<CustInvoiceJourBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustInvoiceJourBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustInvoiceJourBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: CustInvoiceJourBiEntities<T>
  ): DeleteRequestBuilder<CustInvoiceJourBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<CustInvoiceJourBiEntities<T>, T> {
    return new DeleteRequestBuilder<CustInvoiceJourBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustInvoiceJourBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
