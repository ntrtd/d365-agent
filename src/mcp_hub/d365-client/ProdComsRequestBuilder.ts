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
import { ProdComs } from './ProdComs';

/**
 * Request builder class for operations supported on the {@link ProdComs} entity.
 */
export class ProdComsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProdComs<T>, T> {
  /**
   * Returns a request builder for querying all `ProdComs` entities.
   * @returns A request builder for creating requests to retrieve all `ProdComs` entities.
   */
  getAll(): GetAllRequestBuilder<ProdComs<T>, T> {
    return new GetAllRequestBuilder<ProdComs<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProdComs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProdComs`.
   */
  create(entity: ProdComs<T>): CreateRequestBuilder<ProdComs<T>, T> {
    return new CreateRequestBuilder<ProdComs<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ProdComs` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProdComs.dataAreaId}.
   * @param period Key property. See {@link ProdComs.period}.
   * @param columnA Key property. See {@link ProdComs.columnA}.
   * @param branchNumber Key property. See {@link ProdComs.branchNumber}.
   * @param lineNum Key property. See {@link ProdComs.lineNum}.
   * @param itemId Key property. See {@link ProdComs.itemId}.
   * @returns A request builder for creating requests to retrieve one `ProdComs` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    period: DeserializedType<T, 'Edm.String'>,
    columnA: DeserializedType<T, 'Edm.String'>,
    branchNumber: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>,
    itemId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProdComs<T>, T> {
    return new GetByKeyRequestBuilder<ProdComs<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Period: period,
      ColumnA: columnA,
      BranchNumber: branchNumber,
      LineNum: lineNum,
      ItemId: itemId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProdComs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProdComs`.
   */
  update(entity: ProdComs<T>): UpdateRequestBuilder<ProdComs<T>, T> {
    return new UpdateRequestBuilder<ProdComs<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ProdComs`.
   * @param dataAreaId Key property. See {@link ProdComs.dataAreaId}.
   * @param period Key property. See {@link ProdComs.period}.
   * @param columnA Key property. See {@link ProdComs.columnA}.
   * @param branchNumber Key property. See {@link ProdComs.branchNumber}.
   * @param lineNum Key property. See {@link ProdComs.lineNum}.
   * @param itemId Key property. See {@link ProdComs.itemId}.
   * @returns A request builder for creating requests that delete an entity of type `ProdComs`.
   */
  delete(
    dataAreaId: string,
    period: string,
    columnA: string,
    branchNumber: string,
    lineNum: BigNumber,
    itemId: string
  ): DeleteRequestBuilder<ProdComs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProdComs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProdComs` by taking the entity as a parameter.
   */
  delete(entity: ProdComs<T>): DeleteRequestBuilder<ProdComs<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    period?: string,
    columnA?: string,
    branchNumber?: string,
    lineNum?: BigNumber,
    itemId?: string
  ): DeleteRequestBuilder<ProdComs<T>, T> {
    return new DeleteRequestBuilder<ProdComs<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProdComs
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Period: period!,
            ColumnA: columnA!,
            BranchNumber: branchNumber!,
            LineNum: lineNum!,
            ItemId: itemId!
          }
    );
  }
}
