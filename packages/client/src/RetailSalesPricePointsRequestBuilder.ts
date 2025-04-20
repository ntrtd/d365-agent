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
import { RetailSalesPricePoints } from './RetailSalesPricePoints';

/**
 * Request builder class for operations supported on the {@link RetailSalesPricePoints} entity.
 */
export class RetailSalesPricePointsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailSalesPricePoints<T>, T> {
  /**
   * Returns a request builder for querying all `RetailSalesPricePoints` entities.
   * @returns A request builder for creating requests to retrieve all `RetailSalesPricePoints` entities.
   */
  getAll(): GetAllRequestBuilder<RetailSalesPricePoints<T>, T> {
    return new GetAllRequestBuilder<RetailSalesPricePoints<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailSalesPricePoints` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailSalesPricePoints`.
   */
  create(
    entity: RetailSalesPricePoints<T>
  ): CreateRequestBuilder<RetailSalesPricePoints<T>, T> {
    return new CreateRequestBuilder<RetailSalesPricePoints<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailSalesPricePoints` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailSalesPricePoints.dataAreaId}.
   * @param groupId Key property. See {@link RetailSalesPricePoints.groupId}.
   * @param lineNum Key property. See {@link RetailSalesPricePoints.lineNum}.
   * @returns A request builder for creating requests to retrieve one `RetailSalesPricePoints` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupId: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<RetailSalesPricePoints<T>, T> {
    return new GetByKeyRequestBuilder<RetailSalesPricePoints<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GroupId: groupId,
        LineNum: lineNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailSalesPricePoints`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailSalesPricePoints`.
   */
  update(
    entity: RetailSalesPricePoints<T>
  ): UpdateRequestBuilder<RetailSalesPricePoints<T>, T> {
    return new UpdateRequestBuilder<RetailSalesPricePoints<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailSalesPricePoints`.
   * @param dataAreaId Key property. See {@link RetailSalesPricePoints.dataAreaId}.
   * @param groupId Key property. See {@link RetailSalesPricePoints.groupId}.
   * @param lineNum Key property. See {@link RetailSalesPricePoints.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `RetailSalesPricePoints`.
   */
  delete(
    dataAreaId: string,
    groupId: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<RetailSalesPricePoints<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailSalesPricePoints`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailSalesPricePoints` by taking the entity as a parameter.
   */
  delete(
    entity: RetailSalesPricePoints<T>
  ): DeleteRequestBuilder<RetailSalesPricePoints<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupId?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<RetailSalesPricePoints<T>, T> {
    return new DeleteRequestBuilder<RetailSalesPricePoints<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailSalesPricePoints
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupId: groupId!,
            LineNum: lineNum!
          }
    );
  }
}
