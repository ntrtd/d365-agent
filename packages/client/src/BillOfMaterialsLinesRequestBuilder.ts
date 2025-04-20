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
import { BillOfMaterialsLines } from './BillOfMaterialsLines';

/**
 * Request builder class for operations supported on the {@link BillOfMaterialsLines} entity.
 */
export class BillOfMaterialsLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BillOfMaterialsLines<T>, T> {
  /**
   * Returns a request builder for querying all `BillOfMaterialsLines` entities.
   * @returns A request builder for creating requests to retrieve all `BillOfMaterialsLines` entities.
   */
  getAll(): GetAllRequestBuilder<BillOfMaterialsLines<T>, T> {
    return new GetAllRequestBuilder<BillOfMaterialsLines<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BillOfMaterialsLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BillOfMaterialsLines`.
   */
  create(
    entity: BillOfMaterialsLines<T>
  ): CreateRequestBuilder<BillOfMaterialsLines<T>, T> {
    return new CreateRequestBuilder<BillOfMaterialsLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BillOfMaterialsLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link BillOfMaterialsLines.dataAreaId}.
   * @param bomId Key property. See {@link BillOfMaterialsLines.bomId}.
   * @param lineNumber Key property. See {@link BillOfMaterialsLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `BillOfMaterialsLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    bomId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<BillOfMaterialsLines<T>, T> {
    return new GetByKeyRequestBuilder<BillOfMaterialsLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        BOMId: bomId,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BillOfMaterialsLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BillOfMaterialsLines`.
   */
  update(
    entity: BillOfMaterialsLines<T>
  ): UpdateRequestBuilder<BillOfMaterialsLines<T>, T> {
    return new UpdateRequestBuilder<BillOfMaterialsLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BillOfMaterialsLines`.
   * @param dataAreaId Key property. See {@link BillOfMaterialsLines.dataAreaId}.
   * @param bomId Key property. See {@link BillOfMaterialsLines.bomId}.
   * @param lineNumber Key property. See {@link BillOfMaterialsLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `BillOfMaterialsLines`.
   */
  delete(
    dataAreaId: string,
    bomId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<BillOfMaterialsLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BillOfMaterialsLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BillOfMaterialsLines` by taking the entity as a parameter.
   */
  delete(
    entity: BillOfMaterialsLines<T>
  ): DeleteRequestBuilder<BillOfMaterialsLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    bomId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<BillOfMaterialsLines<T>, T> {
    return new DeleteRequestBuilder<BillOfMaterialsLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BillOfMaterialsLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BOMId: bomId!,
            LineNumber: lineNumber!
          }
    );
  }
}
