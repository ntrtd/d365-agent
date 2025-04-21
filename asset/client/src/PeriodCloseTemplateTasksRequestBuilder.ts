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
import { PeriodCloseTemplateTasks } from './PeriodCloseTemplateTasks';

/**
 * Request builder class for operations supported on the {@link PeriodCloseTemplateTasks} entity.
 */
export class PeriodCloseTemplateTasksRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PeriodCloseTemplateTasks<T>, T> {
  /**
   * Returns a request builder for querying all `PeriodCloseTemplateTasks` entities.
   * @returns A request builder for creating requests to retrieve all `PeriodCloseTemplateTasks` entities.
   */
  getAll(): GetAllRequestBuilder<PeriodCloseTemplateTasks<T>, T> {
    return new GetAllRequestBuilder<PeriodCloseTemplateTasks<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PeriodCloseTemplateTasks` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PeriodCloseTemplateTasks`.
   */
  create(
    entity: PeriodCloseTemplateTasks<T>
  ): CreateRequestBuilder<PeriodCloseTemplateTasks<T>, T> {
    return new CreateRequestBuilder<PeriodCloseTemplateTasks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PeriodCloseTemplateTasks` entity based on its keys.
   * @param template Key property. See {@link PeriodCloseTemplateTasks.template}.
   * @param lineNumber Key property. See {@link PeriodCloseTemplateTasks.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `PeriodCloseTemplateTasks` entity based on its keys.
   */
  getByKey(
    template: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<PeriodCloseTemplateTasks<T>, T> {
    return new GetByKeyRequestBuilder<PeriodCloseTemplateTasks<T>, T>(
      this.entityApi,
      {
        Template: template,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PeriodCloseTemplateTasks`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PeriodCloseTemplateTasks`.
   */
  update(
    entity: PeriodCloseTemplateTasks<T>
  ): UpdateRequestBuilder<PeriodCloseTemplateTasks<T>, T> {
    return new UpdateRequestBuilder<PeriodCloseTemplateTasks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PeriodCloseTemplateTasks`.
   * @param template Key property. See {@link PeriodCloseTemplateTasks.template}.
   * @param lineNumber Key property. See {@link PeriodCloseTemplateTasks.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PeriodCloseTemplateTasks`.
   */
  delete(
    template: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<PeriodCloseTemplateTasks<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PeriodCloseTemplateTasks`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PeriodCloseTemplateTasks` by taking the entity as a parameter.
   */
  delete(
    entity: PeriodCloseTemplateTasks<T>
  ): DeleteRequestBuilder<PeriodCloseTemplateTasks<T>, T>;
  delete(
    templateOrEntity: any,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<PeriodCloseTemplateTasks<T>, T> {
    return new DeleteRequestBuilder<PeriodCloseTemplateTasks<T>, T>(
      this.entityApi,
      templateOrEntity instanceof PeriodCloseTemplateTasks
        ? templateOrEntity
        : {
            Template: templateOrEntity!,
            LineNumber: lineNumber!
          }
    );
  }
}
