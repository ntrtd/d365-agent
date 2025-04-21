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
import { ProductionOrderBillOfMaterialLines } from './ProductionOrderBillOfMaterialLines';

/**
 * Request builder class for operations supported on the {@link ProductionOrderBillOfMaterialLines} entity.
 */
export class ProductionOrderBillOfMaterialLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductionOrderBillOfMaterialLines<T>, T> {
  /**
   * Returns a request builder for querying all `ProductionOrderBillOfMaterialLines` entities.
   * @returns A request builder for creating requests to retrieve all `ProductionOrderBillOfMaterialLines` entities.
   */
  getAll(): GetAllRequestBuilder<ProductionOrderBillOfMaterialLines<T>, T> {
    return new GetAllRequestBuilder<ProductionOrderBillOfMaterialLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductionOrderBillOfMaterialLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductionOrderBillOfMaterialLines`.
   */
  create(
    entity: ProductionOrderBillOfMaterialLines<T>
  ): CreateRequestBuilder<ProductionOrderBillOfMaterialLines<T>, T> {
    return new CreateRequestBuilder<ProductionOrderBillOfMaterialLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductionOrderBillOfMaterialLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProductionOrderBillOfMaterialLines.dataAreaId}.
   * @param productionOrderNumber Key property. See {@link ProductionOrderBillOfMaterialLines.productionOrderNumber}.
   * @param lineNumber Key property. See {@link ProductionOrderBillOfMaterialLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `ProductionOrderBillOfMaterialLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    productionOrderNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<ProductionOrderBillOfMaterialLines<T>, T> {
    return new GetByKeyRequestBuilder<ProductionOrderBillOfMaterialLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProductionOrderNumber: productionOrderNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductionOrderBillOfMaterialLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductionOrderBillOfMaterialLines`.
   */
  update(
    entity: ProductionOrderBillOfMaterialLines<T>
  ): UpdateRequestBuilder<ProductionOrderBillOfMaterialLines<T>, T> {
    return new UpdateRequestBuilder<ProductionOrderBillOfMaterialLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductionOrderBillOfMaterialLines`.
   * @param dataAreaId Key property. See {@link ProductionOrderBillOfMaterialLines.dataAreaId}.
   * @param productionOrderNumber Key property. See {@link ProductionOrderBillOfMaterialLines.productionOrderNumber}.
   * @param lineNumber Key property. See {@link ProductionOrderBillOfMaterialLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ProductionOrderBillOfMaterialLines`.
   */
  delete(
    dataAreaId: string,
    productionOrderNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<ProductionOrderBillOfMaterialLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductionOrderBillOfMaterialLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductionOrderBillOfMaterialLines` by taking the entity as a parameter.
   */
  delete(
    entity: ProductionOrderBillOfMaterialLines<T>
  ): DeleteRequestBuilder<ProductionOrderBillOfMaterialLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    productionOrderNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<ProductionOrderBillOfMaterialLines<T>, T> {
    return new DeleteRequestBuilder<ProductionOrderBillOfMaterialLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProductionOrderBillOfMaterialLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProductionOrderNumber: productionOrderNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
