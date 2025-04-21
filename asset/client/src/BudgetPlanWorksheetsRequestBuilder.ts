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
import { BudgetPlanWorksheets } from './BudgetPlanWorksheets';

/**
 * Request builder class for operations supported on the {@link BudgetPlanWorksheets} entity.
 */
export class BudgetPlanWorksheetsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetPlanWorksheets<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetPlanWorksheets` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetPlanWorksheets` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetPlanWorksheets<T>, T> {
    return new GetAllRequestBuilder<BudgetPlanWorksheets<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BudgetPlanWorksheets` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetPlanWorksheets`.
   */
  create(
    entity: BudgetPlanWorksheets<T>
  ): CreateRequestBuilder<BudgetPlanWorksheets<T>, T> {
    return new CreateRequestBuilder<BudgetPlanWorksheets<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BudgetPlanWorksheets` entity based on its keys.
   * @param documentNumber Key property. See {@link BudgetPlanWorksheets.documentNumber}.
   * @param lineNumber Key property. See {@link BudgetPlanWorksheets.lineNumber}.
   * @param layout Key property. See {@link BudgetPlanWorksheets.layout}.
   * @returns A request builder for creating requests to retrieve one `BudgetPlanWorksheets` entity based on its keys.
   */
  getByKey(
    documentNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>,
    layout: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BudgetPlanWorksheets<T>, T> {
    return new GetByKeyRequestBuilder<BudgetPlanWorksheets<T>, T>(
      this.entityApi,
      {
        DocumentNumber: documentNumber,
        LineNumber: lineNumber,
        Layout: layout
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetPlanWorksheets`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetPlanWorksheets`.
   */
  update(
    entity: BudgetPlanWorksheets<T>
  ): UpdateRequestBuilder<BudgetPlanWorksheets<T>, T> {
    return new UpdateRequestBuilder<BudgetPlanWorksheets<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetPlanWorksheets`.
   * @param documentNumber Key property. See {@link BudgetPlanWorksheets.documentNumber}.
   * @param lineNumber Key property. See {@link BudgetPlanWorksheets.lineNumber}.
   * @param layout Key property. See {@link BudgetPlanWorksheets.layout}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetPlanWorksheets`.
   */
  delete(
    documentNumber: string,
    lineNumber: BigNumber,
    layout: string
  ): DeleteRequestBuilder<BudgetPlanWorksheets<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetPlanWorksheets`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetPlanWorksheets` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetPlanWorksheets<T>
  ): DeleteRequestBuilder<BudgetPlanWorksheets<T>, T>;
  delete(
    documentNumberOrEntity: any,
    lineNumber?: BigNumber,
    layout?: string
  ): DeleteRequestBuilder<BudgetPlanWorksheets<T>, T> {
    return new DeleteRequestBuilder<BudgetPlanWorksheets<T>, T>(
      this.entityApi,
      documentNumberOrEntity instanceof BudgetPlanWorksheets
        ? documentNumberOrEntity
        : {
            DocumentNumber: documentNumberOrEntity!,
            LineNumber: lineNumber!,
            Layout: layout!
          }
    );
  }
}
