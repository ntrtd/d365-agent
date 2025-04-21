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
import { VendInvoiceInfoLineBiEntities } from './VendInvoiceInfoLineBiEntities';

/**
 * Request builder class for operations supported on the {@link VendInvoiceInfoLineBiEntities} entity.
 */
export class VendInvoiceInfoLineBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendInvoiceInfoLineBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `VendInvoiceInfoLineBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `VendInvoiceInfoLineBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<VendInvoiceInfoLineBiEntities<T>, T> {
    return new GetAllRequestBuilder<VendInvoiceInfoLineBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VendInvoiceInfoLineBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendInvoiceInfoLineBiEntities`.
   */
  create(
    entity: VendInvoiceInfoLineBiEntities<T>
  ): CreateRequestBuilder<VendInvoiceInfoLineBiEntities<T>, T> {
    return new CreateRequestBuilder<VendInvoiceInfoLineBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendInvoiceInfoLineBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendInvoiceInfoLineBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link VendInvoiceInfoLineBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `VendInvoiceInfoLineBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<VendInvoiceInfoLineBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<VendInvoiceInfoLineBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SourceKey: sourceKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendInvoiceInfoLineBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendInvoiceInfoLineBiEntities`.
   */
  update(
    entity: VendInvoiceInfoLineBiEntities<T>
  ): UpdateRequestBuilder<VendInvoiceInfoLineBiEntities<T>, T> {
    return new UpdateRequestBuilder<VendInvoiceInfoLineBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendInvoiceInfoLineBiEntities`.
   * @param dataAreaId Key property. See {@link VendInvoiceInfoLineBiEntities.dataAreaId}.
   * @param sourceKey Key property. See {@link VendInvoiceInfoLineBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `VendInvoiceInfoLineBiEntities`.
   */
  delete(
    dataAreaId: string,
    sourceKey: BigNumber
  ): DeleteRequestBuilder<VendInvoiceInfoLineBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendInvoiceInfoLineBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendInvoiceInfoLineBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: VendInvoiceInfoLineBiEntities<T>
  ): DeleteRequestBuilder<VendInvoiceInfoLineBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceKey?: BigNumber
  ): DeleteRequestBuilder<VendInvoiceInfoLineBiEntities<T>, T> {
    return new DeleteRequestBuilder<VendInvoiceInfoLineBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendInvoiceInfoLineBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceKey: sourceKey!
          }
    );
  }
}
