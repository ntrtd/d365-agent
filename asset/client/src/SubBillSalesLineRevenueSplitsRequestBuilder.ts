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
import { SubBillSalesLineRevenueSplits } from './SubBillSalesLineRevenueSplits';

/**
 * Request builder class for operations supported on the {@link SubBillSalesLineRevenueSplits} entity.
 */
export class SubBillSalesLineRevenueSplitsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillSalesLineRevenueSplits<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillSalesLineRevenueSplits` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillSalesLineRevenueSplits` entities.
   */
  getAll(): GetAllRequestBuilder<SubBillSalesLineRevenueSplits<T>, T> {
    return new GetAllRequestBuilder<SubBillSalesLineRevenueSplits<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SubBillSalesLineRevenueSplits` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillSalesLineRevenueSplits`.
   */
  create(
    entity: SubBillSalesLineRevenueSplits<T>
  ): CreateRequestBuilder<SubBillSalesLineRevenueSplits<T>, T> {
    return new CreateRequestBuilder<SubBillSalesLineRevenueSplits<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SubBillSalesLineRevenueSplits` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillSalesLineRevenueSplits.dataAreaId}.
   * @param salesOrderNumber Key property. See {@link SubBillSalesLineRevenueSplits.salesOrderNumber}.
   * @param parentLineNum Key property. See {@link SubBillSalesLineRevenueSplits.parentLineNum}.
   * @param childItemId Key property. See {@link SubBillSalesLineRevenueSplits.childItemId}.
   * @returns A request builder for creating requests to retrieve one `SubBillSalesLineRevenueSplits` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesOrderNumber: DeserializedType<T, 'Edm.String'>,
    parentLineNum: DeserializedType<T, 'Edm.Decimal'>,
    childItemId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SubBillSalesLineRevenueSplits<T>, T> {
    return new GetByKeyRequestBuilder<SubBillSalesLineRevenueSplits<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SalesOrderNumber: salesOrderNumber,
        ParentLineNum: parentLineNum,
        ChildItemId: childItemId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillSalesLineRevenueSplits`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillSalesLineRevenueSplits`.
   */
  update(
    entity: SubBillSalesLineRevenueSplits<T>
  ): UpdateRequestBuilder<SubBillSalesLineRevenueSplits<T>, T> {
    return new UpdateRequestBuilder<SubBillSalesLineRevenueSplits<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillSalesLineRevenueSplits`.
   * @param dataAreaId Key property. See {@link SubBillSalesLineRevenueSplits.dataAreaId}.
   * @param salesOrderNumber Key property. See {@link SubBillSalesLineRevenueSplits.salesOrderNumber}.
   * @param parentLineNum Key property. See {@link SubBillSalesLineRevenueSplits.parentLineNum}.
   * @param childItemId Key property. See {@link SubBillSalesLineRevenueSplits.childItemId}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillSalesLineRevenueSplits`.
   */
  delete(
    dataAreaId: string,
    salesOrderNumber: string,
    parentLineNum: BigNumber,
    childItemId: string
  ): DeleteRequestBuilder<SubBillSalesLineRevenueSplits<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillSalesLineRevenueSplits`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillSalesLineRevenueSplits` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillSalesLineRevenueSplits<T>
  ): DeleteRequestBuilder<SubBillSalesLineRevenueSplits<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesOrderNumber?: string,
    parentLineNum?: BigNumber,
    childItemId?: string
  ): DeleteRequestBuilder<SubBillSalesLineRevenueSplits<T>, T> {
    return new DeleteRequestBuilder<SubBillSalesLineRevenueSplits<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillSalesLineRevenueSplits
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesOrderNumber: salesOrderNumber!,
            ParentLineNum: parentLineNum!,
            ChildItemId: childItemId!
          }
    );
  }
}
