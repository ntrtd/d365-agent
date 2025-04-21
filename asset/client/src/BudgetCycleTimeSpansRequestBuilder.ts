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
import { BudgetCycleTimeSpans } from './BudgetCycleTimeSpans';

/**
 * Request builder class for operations supported on the {@link BudgetCycleTimeSpans} entity.
 */
export class BudgetCycleTimeSpansRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetCycleTimeSpans<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetCycleTimeSpans` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetCycleTimeSpans` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetCycleTimeSpans<T>, T> {
    return new GetAllRequestBuilder<BudgetCycleTimeSpans<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BudgetCycleTimeSpans` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetCycleTimeSpans`.
   */
  create(
    entity: BudgetCycleTimeSpans<T>
  ): CreateRequestBuilder<BudgetCycleTimeSpans<T>, T> {
    return new CreateRequestBuilder<BudgetCycleTimeSpans<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BudgetCycleTimeSpans` entity based on its keys.
   * @param name Key property. See {@link BudgetCycleTimeSpans.name}.
   * @param fiscalCalendarId Key property. See {@link BudgetCycleTimeSpans.fiscalCalendarId}.
   * @returns A request builder for creating requests to retrieve one `BudgetCycleTimeSpans` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>,
    fiscalCalendarId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BudgetCycleTimeSpans<T>, T> {
    return new GetByKeyRequestBuilder<BudgetCycleTimeSpans<T>, T>(
      this.entityApi,
      {
        Name: name,
        FiscalCalendarId: fiscalCalendarId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetCycleTimeSpans`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetCycleTimeSpans`.
   */
  update(
    entity: BudgetCycleTimeSpans<T>
  ): UpdateRequestBuilder<BudgetCycleTimeSpans<T>, T> {
    return new UpdateRequestBuilder<BudgetCycleTimeSpans<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetCycleTimeSpans`.
   * @param name Key property. See {@link BudgetCycleTimeSpans.name}.
   * @param fiscalCalendarId Key property. See {@link BudgetCycleTimeSpans.fiscalCalendarId}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetCycleTimeSpans`.
   */
  delete(
    name: string,
    fiscalCalendarId: string
  ): DeleteRequestBuilder<BudgetCycleTimeSpans<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetCycleTimeSpans`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetCycleTimeSpans` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetCycleTimeSpans<T>
  ): DeleteRequestBuilder<BudgetCycleTimeSpans<T>, T>;
  delete(
    nameOrEntity: any,
    fiscalCalendarId?: string
  ): DeleteRequestBuilder<BudgetCycleTimeSpans<T>, T> {
    return new DeleteRequestBuilder<BudgetCycleTimeSpans<T>, T>(
      this.entityApi,
      nameOrEntity instanceof BudgetCycleTimeSpans
        ? nameOrEntity
        : {
            Name: nameOrEntity!,
            FiscalCalendarId: fiscalCalendarId!
          }
    );
  }
}
