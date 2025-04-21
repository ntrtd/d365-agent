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
import { VendInvoiceJourBiEntities } from './VendInvoiceJourBiEntities';

/**
 * Request builder class for operations supported on the {@link VendInvoiceJourBiEntities} entity.
 */
export class VendInvoiceJourBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendInvoiceJourBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `VendInvoiceJourBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `VendInvoiceJourBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<VendInvoiceJourBiEntities<T>, T> {
    return new GetAllRequestBuilder<VendInvoiceJourBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VendInvoiceJourBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendInvoiceJourBiEntities`.
   */
  create(
    entity: VendInvoiceJourBiEntities<T>
  ): CreateRequestBuilder<VendInvoiceJourBiEntities<T>, T> {
    return new CreateRequestBuilder<VendInvoiceJourBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendInvoiceJourBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendInvoiceJourBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link VendInvoiceJourBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `VendInvoiceJourBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<VendInvoiceJourBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<VendInvoiceJourBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceKey: sourceKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendInvoiceJourBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendInvoiceJourBiEntities`.
   */
  update(
    entity: VendInvoiceJourBiEntities<T>
  ): UpdateRequestBuilder<VendInvoiceJourBiEntities<T>, T> {
    return new UpdateRequestBuilder<VendInvoiceJourBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendInvoiceJourBiEntities`.
   * @param dataAreaId Key property. See {@link VendInvoiceJourBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link VendInvoiceJourBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `VendInvoiceJourBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<VendInvoiceJourBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendInvoiceJourBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendInvoiceJourBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: VendInvoiceJourBiEntities<T>
  ): DeleteRequestBuilder<VendInvoiceJourBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<VendInvoiceJourBiEntities<T>, T> {
    return new DeleteRequestBuilder<VendInvoiceJourBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendInvoiceJourBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
