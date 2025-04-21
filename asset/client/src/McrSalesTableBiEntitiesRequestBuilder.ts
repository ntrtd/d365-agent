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
import { McrSalesTableBiEntities } from './McrSalesTableBiEntities';

/**
 * Request builder class for operations supported on the {@link McrSalesTableBiEntities} entity.
 */
export class McrSalesTableBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<McrSalesTableBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `McrSalesTableBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `McrSalesTableBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<McrSalesTableBiEntities<T>, T> {
    return new GetAllRequestBuilder<McrSalesTableBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `McrSalesTableBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `McrSalesTableBiEntities`.
   */
  create(
    entity: McrSalesTableBiEntities<T>
  ): CreateRequestBuilder<McrSalesTableBiEntities<T>, T> {
    return new CreateRequestBuilder<McrSalesTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `McrSalesTableBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link McrSalesTableBiEntities.dataAreaId}.
   * @param salesTable Key property. See {@link McrSalesTableBiEntities.salesTable}.
   * @returns A request builder for creating requests to retrieve one `McrSalesTableBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesTable: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<McrSalesTableBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<McrSalesTableBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SalesTable: salesTable
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `McrSalesTableBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `McrSalesTableBiEntities`.
   */
  update(
    entity: McrSalesTableBiEntities<T>
  ): UpdateRequestBuilder<McrSalesTableBiEntities<T>, T> {
    return new UpdateRequestBuilder<McrSalesTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `McrSalesTableBiEntities`.
   * @param dataAreaId Key property. See {@link McrSalesTableBiEntities.dataAreaId}.
   * @param salesTable Key property. See {@link McrSalesTableBiEntities.salesTable}.
   * @returns A request builder for creating requests that delete an entity of type `McrSalesTableBiEntities`.
   */
  delete(
    dataAreaId: string,
    salesTable: BigNumber
  ): DeleteRequestBuilder<McrSalesTableBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `McrSalesTableBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `McrSalesTableBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: McrSalesTableBiEntities<T>
  ): DeleteRequestBuilder<McrSalesTableBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesTable?: BigNumber
  ): DeleteRequestBuilder<McrSalesTableBiEntities<T>, T> {
    return new DeleteRequestBuilder<McrSalesTableBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof McrSalesTableBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesTable: salesTable!
          }
    );
  }
}
