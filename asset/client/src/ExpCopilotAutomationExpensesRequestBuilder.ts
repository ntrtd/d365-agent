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
import { ExpCopilotAutomationExpenses } from './ExpCopilotAutomationExpenses';

/**
 * Request builder class for operations supported on the {@link ExpCopilotAutomationExpenses} entity.
 */
export class ExpCopilotAutomationExpensesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExpCopilotAutomationExpenses<T>, T> {
  /**
   * Returns a request builder for querying all `ExpCopilotAutomationExpenses` entities.
   * @returns A request builder for creating requests to retrieve all `ExpCopilotAutomationExpenses` entities.
   */
  getAll(): GetAllRequestBuilder<ExpCopilotAutomationExpenses<T>, T> {
    return new GetAllRequestBuilder<ExpCopilotAutomationExpenses<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ExpCopilotAutomationExpenses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExpCopilotAutomationExpenses`.
   */
  create(
    entity: ExpCopilotAutomationExpenses<T>
  ): CreateRequestBuilder<ExpCopilotAutomationExpenses<T>, T> {
    return new CreateRequestBuilder<ExpCopilotAutomationExpenses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExpCopilotAutomationExpenses` entity based on its keys.
   * @param dataAreaId Key property. See {@link ExpCopilotAutomationExpenses.dataAreaId}.
   * @param expTransNumber Key property. See {@link ExpCopilotAutomationExpenses.expTransNumber}.
   * @returns A request builder for creating requests to retrieve one `ExpCopilotAutomationExpenses` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    expTransNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ExpCopilotAutomationExpenses<T>, T> {
    return new GetByKeyRequestBuilder<ExpCopilotAutomationExpenses<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ExpTransNumber: expTransNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ExpCopilotAutomationExpenses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExpCopilotAutomationExpenses`.
   */
  update(
    entity: ExpCopilotAutomationExpenses<T>
  ): UpdateRequestBuilder<ExpCopilotAutomationExpenses<T>, T> {
    return new UpdateRequestBuilder<ExpCopilotAutomationExpenses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExpCopilotAutomationExpenses`.
   * @param dataAreaId Key property. See {@link ExpCopilotAutomationExpenses.dataAreaId}.
   * @param expTransNumber Key property. See {@link ExpCopilotAutomationExpenses.expTransNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ExpCopilotAutomationExpenses`.
   */
  delete(
    dataAreaId: string,
    expTransNumber: string
  ): DeleteRequestBuilder<ExpCopilotAutomationExpenses<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExpCopilotAutomationExpenses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExpCopilotAutomationExpenses` by taking the entity as a parameter.
   */
  delete(
    entity: ExpCopilotAutomationExpenses<T>
  ): DeleteRequestBuilder<ExpCopilotAutomationExpenses<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    expTransNumber?: string
  ): DeleteRequestBuilder<ExpCopilotAutomationExpenses<T>, T> {
    return new DeleteRequestBuilder<ExpCopilotAutomationExpenses<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ExpCopilotAutomationExpenses
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ExpTransNumber: expTransNumber!
          }
    );
  }
}
