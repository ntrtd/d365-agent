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
import { BudgetPlanHeaders } from './BudgetPlanHeaders';

/**
 * Request builder class for operations supported on the {@link BudgetPlanHeaders} entity.
 */
export class BudgetPlanHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetPlanHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetPlanHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetPlanHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetPlanHeaders<T>, T> {
    return new GetAllRequestBuilder<BudgetPlanHeaders<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BudgetPlanHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetPlanHeaders`.
   */
  create(
    entity: BudgetPlanHeaders<T>
  ): CreateRequestBuilder<BudgetPlanHeaders<T>, T> {
    return new CreateRequestBuilder<BudgetPlanHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BudgetPlanHeaders` entity based on its keys.
   * @param documentNumber Key property. See {@link BudgetPlanHeaders.documentNumber}.
   * @returns A request builder for creating requests to retrieve one `BudgetPlanHeaders` entity based on its keys.
   */
  getByKey(
    documentNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BudgetPlanHeaders<T>, T> {
    return new GetByKeyRequestBuilder<BudgetPlanHeaders<T>, T>(this.entityApi, {
      DocumentNumber: documentNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetPlanHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetPlanHeaders`.
   */
  update(
    entity: BudgetPlanHeaders<T>
  ): UpdateRequestBuilder<BudgetPlanHeaders<T>, T> {
    return new UpdateRequestBuilder<BudgetPlanHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetPlanHeaders`.
   * @param documentNumber Key property. See {@link BudgetPlanHeaders.documentNumber}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetPlanHeaders`.
   */
  delete(documentNumber: string): DeleteRequestBuilder<BudgetPlanHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetPlanHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetPlanHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetPlanHeaders<T>
  ): DeleteRequestBuilder<BudgetPlanHeaders<T>, T>;
  delete(
    documentNumberOrEntity: any
  ): DeleteRequestBuilder<BudgetPlanHeaders<T>, T> {
    return new DeleteRequestBuilder<BudgetPlanHeaders<T>, T>(
      this.entityApi,
      documentNumberOrEntity instanceof BudgetPlanHeaders
        ? documentNumberOrEntity
        : { DocumentNumber: documentNumberOrEntity! }
    );
  }
}
