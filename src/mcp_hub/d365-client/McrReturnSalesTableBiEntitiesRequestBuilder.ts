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
import { McrReturnSalesTableBiEntities } from './McrReturnSalesTableBiEntities';

/**
 * Request builder class for operations supported on the {@link McrReturnSalesTableBiEntities} entity.
 */
export class McrReturnSalesTableBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<McrReturnSalesTableBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `McrReturnSalesTableBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `McrReturnSalesTableBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<McrReturnSalesTableBiEntities<T>, T> {
    return new GetAllRequestBuilder<McrReturnSalesTableBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `McrReturnSalesTableBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `McrReturnSalesTableBiEntities`.
   */
  create(
    entity: McrReturnSalesTableBiEntities<T>
  ): CreateRequestBuilder<McrReturnSalesTableBiEntities<T>, T> {
    return new CreateRequestBuilder<McrReturnSalesTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `McrReturnSalesTableBiEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link McrReturnSalesTableBiEntities.dataAreaId}.
   * @param salesTable Key property. See {@link McrReturnSalesTableBiEntities.salesTable}.
   * @returns A request builder for creating requests to retrieve one `McrReturnSalesTableBiEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesTable: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<McrReturnSalesTableBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<McrReturnSalesTableBiEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SalesTable: salesTable
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `McrReturnSalesTableBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `McrReturnSalesTableBiEntities`.
   */
  update(
    entity: McrReturnSalesTableBiEntities<T>
  ): UpdateRequestBuilder<McrReturnSalesTableBiEntities<T>, T> {
    return new UpdateRequestBuilder<McrReturnSalesTableBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `McrReturnSalesTableBiEntities`.
   * @param dataAreaId Key property. See {@link McrReturnSalesTableBiEntities.dataAreaId}.
   * @param salesTable Key property. See {@link McrReturnSalesTableBiEntities.salesTable}.
   * @returns A request builder for creating requests that delete an entity of type `McrReturnSalesTableBiEntities`.
   */
  delete(
    dataAreaId: string,
    salesTable: BigNumber
  ): DeleteRequestBuilder<McrReturnSalesTableBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `McrReturnSalesTableBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `McrReturnSalesTableBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: McrReturnSalesTableBiEntities<T>
  ): DeleteRequestBuilder<McrReturnSalesTableBiEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesTable?: BigNumber
  ): DeleteRequestBuilder<McrReturnSalesTableBiEntities<T>, T> {
    return new DeleteRequestBuilder<McrReturnSalesTableBiEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof McrReturnSalesTableBiEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesTable: salesTable!
          }
    );
  }
}
