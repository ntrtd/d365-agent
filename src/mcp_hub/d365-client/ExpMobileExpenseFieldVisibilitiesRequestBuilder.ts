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
import { ExpMobileExpenseFieldVisibilities } from './ExpMobileExpenseFieldVisibilities';

/**
 * Request builder class for operations supported on the {@link ExpMobileExpenseFieldVisibilities} entity.
 */
export class ExpMobileExpenseFieldVisibilitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExpMobileExpenseFieldVisibilities<T>, T> {
  /**
   * Returns a request builder for querying all `ExpMobileExpenseFieldVisibilities` entities.
   * @returns A request builder for creating requests to retrieve all `ExpMobileExpenseFieldVisibilities` entities.
   */
  getAll(): GetAllRequestBuilder<ExpMobileExpenseFieldVisibilities<T>, T> {
    return new GetAllRequestBuilder<ExpMobileExpenseFieldVisibilities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ExpMobileExpenseFieldVisibilities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExpMobileExpenseFieldVisibilities`.
   */
  create(
    entity: ExpMobileExpenseFieldVisibilities<T>
  ): CreateRequestBuilder<ExpMobileExpenseFieldVisibilities<T>, T> {
    return new CreateRequestBuilder<ExpMobileExpenseFieldVisibilities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExpMobileExpenseFieldVisibilities` entity based on its keys.
   * @param legalEntityId Key property. See {@link ExpMobileExpenseFieldVisibilities.legalEntityId}.
   * @param referenceTableId Key property. See {@link ExpMobileExpenseFieldVisibilities.referenceTableId}.
   * @param expenseFieldName Key property. See {@link ExpMobileExpenseFieldVisibilities.expenseFieldName}.
   * @returns A request builder for creating requests to retrieve one `ExpMobileExpenseFieldVisibilities` entity based on its keys.
   */
  getByKey(
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    referenceTableId: DeserializedType<T, 'Edm.Int32'>,
    expenseFieldName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ExpMobileExpenseFieldVisibilities<T>, T> {
    return new GetByKeyRequestBuilder<ExpMobileExpenseFieldVisibilities<T>, T>(
      this.entityApi,
      {
        LegalEntityId: legalEntityId,
        ReferenceTableID: referenceTableId,
        ExpenseFieldName: expenseFieldName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ExpMobileExpenseFieldVisibilities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExpMobileExpenseFieldVisibilities`.
   */
  update(
    entity: ExpMobileExpenseFieldVisibilities<T>
  ): UpdateRequestBuilder<ExpMobileExpenseFieldVisibilities<T>, T> {
    return new UpdateRequestBuilder<ExpMobileExpenseFieldVisibilities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExpMobileExpenseFieldVisibilities`.
   * @param legalEntityId Key property. See {@link ExpMobileExpenseFieldVisibilities.legalEntityId}.
   * @param referenceTableId Key property. See {@link ExpMobileExpenseFieldVisibilities.referenceTableId}.
   * @param expenseFieldName Key property. See {@link ExpMobileExpenseFieldVisibilities.expenseFieldName}.
   * @returns A request builder for creating requests that delete an entity of type `ExpMobileExpenseFieldVisibilities`.
   */
  delete(
    legalEntityId: string,
    referenceTableId: number,
    expenseFieldName: string
  ): DeleteRequestBuilder<ExpMobileExpenseFieldVisibilities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExpMobileExpenseFieldVisibilities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExpMobileExpenseFieldVisibilities` by taking the entity as a parameter.
   */
  delete(
    entity: ExpMobileExpenseFieldVisibilities<T>
  ): DeleteRequestBuilder<ExpMobileExpenseFieldVisibilities<T>, T>;
  delete(
    legalEntityIdOrEntity: any,
    referenceTableId?: number,
    expenseFieldName?: string
  ): DeleteRequestBuilder<ExpMobileExpenseFieldVisibilities<T>, T> {
    return new DeleteRequestBuilder<ExpMobileExpenseFieldVisibilities<T>, T>(
      this.entityApi,
      legalEntityIdOrEntity instanceof ExpMobileExpenseFieldVisibilities
        ? legalEntityIdOrEntity
        : {
            LegalEntityId: legalEntityIdOrEntity!,
            ReferenceTableID: referenceTableId!,
            ExpenseFieldName: expenseFieldName!
          }
    );
  }
}
