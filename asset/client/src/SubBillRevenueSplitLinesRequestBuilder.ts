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
import { SubBillRevenueSplitLines } from './SubBillRevenueSplitLines';

/**
 * Request builder class for operations supported on the {@link SubBillRevenueSplitLines} entity.
 */
export class SubBillRevenueSplitLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillRevenueSplitLines<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillRevenueSplitLines` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillRevenueSplitLines` entities.
   */
  getAll(): GetAllRequestBuilder<SubBillRevenueSplitLines<T>, T> {
    return new GetAllRequestBuilder<SubBillRevenueSplitLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SubBillRevenueSplitLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillRevenueSplitLines`.
   */
  create(
    entity: SubBillRevenueSplitLines<T>
  ): CreateRequestBuilder<SubBillRevenueSplitLines<T>, T> {
    return new CreateRequestBuilder<SubBillRevenueSplitLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SubBillRevenueSplitLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillRevenueSplitLines.dataAreaId}.
   * @param parentItem Key property. See {@link SubBillRevenueSplitLines.parentItem}.
   * @param lineNum Key property. See {@link SubBillRevenueSplitLines.lineNum}.
   * @returns A request builder for creating requests to retrieve one `SubBillRevenueSplitLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    parentItem: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<SubBillRevenueSplitLines<T>, T> {
    return new GetByKeyRequestBuilder<SubBillRevenueSplitLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ParentItem: parentItem,
        LineNum: lineNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillRevenueSplitLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillRevenueSplitLines`.
   */
  update(
    entity: SubBillRevenueSplitLines<T>
  ): UpdateRequestBuilder<SubBillRevenueSplitLines<T>, T> {
    return new UpdateRequestBuilder<SubBillRevenueSplitLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillRevenueSplitLines`.
   * @param dataAreaId Key property. See {@link SubBillRevenueSplitLines.dataAreaId}.
   * @param parentItem Key property. See {@link SubBillRevenueSplitLines.parentItem}.
   * @param lineNum Key property. See {@link SubBillRevenueSplitLines.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillRevenueSplitLines`.
   */
  delete(
    dataAreaId: string,
    parentItem: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<SubBillRevenueSplitLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillRevenueSplitLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillRevenueSplitLines` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillRevenueSplitLines<T>
  ): DeleteRequestBuilder<SubBillRevenueSplitLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    parentItem?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<SubBillRevenueSplitLines<T>, T> {
    return new DeleteRequestBuilder<SubBillRevenueSplitLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillRevenueSplitLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ParentItem: parentItem!,
            LineNum: lineNum!
          }
    );
  }
}
