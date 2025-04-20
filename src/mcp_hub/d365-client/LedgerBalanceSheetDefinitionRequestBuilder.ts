/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { LedgerBalanceSheetDefinition } from './LedgerBalanceSheetDefinition';

/**
 * Request builder class for operations supported on the {@link LedgerBalanceSheetDefinition} entity.
 */
export class LedgerBalanceSheetDefinitionRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LedgerBalanceSheetDefinition<T>, T> {
  /**
   * Returns a request builder for querying all `LedgerBalanceSheetDefinition` entities.
   * @returns A request builder for creating requests to retrieve all `LedgerBalanceSheetDefinition` entities.
   */
  getAll(): GetAllRequestBuilder<LedgerBalanceSheetDefinition<T>, T> {
    return new GetAllRequestBuilder<LedgerBalanceSheetDefinition<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LedgerBalanceSheetDefinition` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LedgerBalanceSheetDefinition`.
   */
  create(
    entity: LedgerBalanceSheetDefinition<T>
  ): CreateRequestBuilder<LedgerBalanceSheetDefinition<T>, T> {
    return new CreateRequestBuilder<LedgerBalanceSheetDefinition<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LedgerBalanceSheetDefinition` entity based on its keys.
   * @param dataAreaId Key property. See {@link LedgerBalanceSheetDefinition.dataAreaId}.
   * @param line Key property. See {@link LedgerBalanceSheetDefinition.line}.
   * @param grossLineId Key property. See {@link LedgerBalanceSheetDefinition.grossLineId}.
   * @param adjustmentLineId Key property. See {@link LedgerBalanceSheetDefinition.adjustmentLineId}.
   * @returns A request builder for creating requests to retrieve one `LedgerBalanceSheetDefinition` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    line: DeserializedType<T, 'Edm.Int32'>,
    grossLineId: DeserializedType<T, 'Edm.Guid'>,
    adjustmentLineId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<LedgerBalanceSheetDefinition<T>, T> {
    return new GetByKeyRequestBuilder<LedgerBalanceSheetDefinition<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Line: line,
        GrossLineId: grossLineId,
        AdjustmentLineId: adjustmentLineId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LedgerBalanceSheetDefinition`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LedgerBalanceSheetDefinition`.
   */
  update(
    entity: LedgerBalanceSheetDefinition<T>
  ): UpdateRequestBuilder<LedgerBalanceSheetDefinition<T>, T> {
    return new UpdateRequestBuilder<LedgerBalanceSheetDefinition<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LedgerBalanceSheetDefinition`.
   * @param dataAreaId Key property. See {@link LedgerBalanceSheetDefinition.dataAreaId}.
   * @param line Key property. See {@link LedgerBalanceSheetDefinition.line}.
   * @param grossLineId Key property. See {@link LedgerBalanceSheetDefinition.grossLineId}.
   * @param adjustmentLineId Key property. See {@link LedgerBalanceSheetDefinition.adjustmentLineId}.
   * @returns A request builder for creating requests that delete an entity of type `LedgerBalanceSheetDefinition`.
   */
  delete(
    dataAreaId: string,
    line: number,
    grossLineId: string,
    adjustmentLineId: string
  ): DeleteRequestBuilder<LedgerBalanceSheetDefinition<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LedgerBalanceSheetDefinition`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LedgerBalanceSheetDefinition` by taking the entity as a parameter.
   */
  delete(
    entity: LedgerBalanceSheetDefinition<T>
  ): DeleteRequestBuilder<LedgerBalanceSheetDefinition<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    line?: number,
    grossLineId?: string,
    adjustmentLineId?: string
  ): DeleteRequestBuilder<LedgerBalanceSheetDefinition<T>, T> {
    return new DeleteRequestBuilder<LedgerBalanceSheetDefinition<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LedgerBalanceSheetDefinition
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Line: line!,
            GrossLineId: grossLineId!,
            AdjustmentLineId: adjustmentLineId!
          }
    );
  }
}
