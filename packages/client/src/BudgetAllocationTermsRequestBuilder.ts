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
import { BudgetAllocationTerms } from './BudgetAllocationTerms';

/**
 * Request builder class for operations supported on the {@link BudgetAllocationTerms} entity.
 */
export class BudgetAllocationTermsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetAllocationTerms<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetAllocationTerms` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetAllocationTerms` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetAllocationTerms<T>, T> {
    return new GetAllRequestBuilder<BudgetAllocationTerms<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BudgetAllocationTerms` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetAllocationTerms`.
   */
  create(
    entity: BudgetAllocationTerms<T>
  ): CreateRequestBuilder<BudgetAllocationTerms<T>, T> {
    return new CreateRequestBuilder<BudgetAllocationTerms<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BudgetAllocationTerms` entity based on its keys.
   * @param dataAreaId Key property. See {@link BudgetAllocationTerms.dataAreaId}.
   * @param budgetAllocationTerm Key property. See {@link BudgetAllocationTerms.budgetAllocationTerm}.
   * @param lineNumber Key property. See {@link BudgetAllocationTerms.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `BudgetAllocationTerms` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    budgetAllocationTerm: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<BudgetAllocationTerms<T>, T> {
    return new GetByKeyRequestBuilder<BudgetAllocationTerms<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        BudgetAllocationTerm: budgetAllocationTerm,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetAllocationTerms`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetAllocationTerms`.
   */
  update(
    entity: BudgetAllocationTerms<T>
  ): UpdateRequestBuilder<BudgetAllocationTerms<T>, T> {
    return new UpdateRequestBuilder<BudgetAllocationTerms<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetAllocationTerms`.
   * @param dataAreaId Key property. See {@link BudgetAllocationTerms.dataAreaId}.
   * @param budgetAllocationTerm Key property. See {@link BudgetAllocationTerms.budgetAllocationTerm}.
   * @param lineNumber Key property. See {@link BudgetAllocationTerms.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetAllocationTerms`.
   */
  delete(
    dataAreaId: string,
    budgetAllocationTerm: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<BudgetAllocationTerms<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetAllocationTerms`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetAllocationTerms` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetAllocationTerms<T>
  ): DeleteRequestBuilder<BudgetAllocationTerms<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    budgetAllocationTerm?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<BudgetAllocationTerms<T>, T> {
    return new DeleteRequestBuilder<BudgetAllocationTerms<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BudgetAllocationTerms
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BudgetAllocationTerm: budgetAllocationTerm!,
            LineNumber: lineNumber!
          }
    );
  }
}
