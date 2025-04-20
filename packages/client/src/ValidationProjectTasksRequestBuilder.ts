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
import { ValidationProjectTasks } from './ValidationProjectTasks';

/**
 * Request builder class for operations supported on the {@link ValidationProjectTasks} entity.
 */
export class ValidationProjectTasksRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ValidationProjectTasks<T>, T> {
  /**
   * Returns a request builder for querying all `ValidationProjectTasks` entities.
   * @returns A request builder for creating requests to retrieve all `ValidationProjectTasks` entities.
   */
  getAll(): GetAllRequestBuilder<ValidationProjectTasks<T>, T> {
    return new GetAllRequestBuilder<ValidationProjectTasks<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ValidationProjectTasks` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ValidationProjectTasks`.
   */
  create(
    entity: ValidationProjectTasks<T>
  ): CreateRequestBuilder<ValidationProjectTasks<T>, T> {
    return new CreateRequestBuilder<ValidationProjectTasks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ValidationProjectTasks` entity based on its keys.
   * @param dataValidationProjectName Key property. See {@link ValidationProjectTasks.dataValidationProjectName}.
   * @param lineNumber Key property. See {@link ValidationProjectTasks.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `ValidationProjectTasks` entity based on its keys.
   */
  getByKey(
    dataValidationProjectName: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<ValidationProjectTasks<T>, T> {
    return new GetByKeyRequestBuilder<ValidationProjectTasks<T>, T>(
      this.entityApi,
      {
        DataValidationProject_Name: dataValidationProjectName,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ValidationProjectTasks`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ValidationProjectTasks`.
   */
  update(
    entity: ValidationProjectTasks<T>
  ): UpdateRequestBuilder<ValidationProjectTasks<T>, T> {
    return new UpdateRequestBuilder<ValidationProjectTasks<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ValidationProjectTasks`.
   * @param dataValidationProjectName Key property. See {@link ValidationProjectTasks.dataValidationProjectName}.
   * @param lineNumber Key property. See {@link ValidationProjectTasks.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ValidationProjectTasks`.
   */
  delete(
    dataValidationProjectName: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<ValidationProjectTasks<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ValidationProjectTasks`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ValidationProjectTasks` by taking the entity as a parameter.
   */
  delete(
    entity: ValidationProjectTasks<T>
  ): DeleteRequestBuilder<ValidationProjectTasks<T>, T>;
  delete(
    dataValidationProjectNameOrEntity: any,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<ValidationProjectTasks<T>, T> {
    return new DeleteRequestBuilder<ValidationProjectTasks<T>, T>(
      this.entityApi,
      dataValidationProjectNameOrEntity instanceof ValidationProjectTasks
        ? dataValidationProjectNameOrEntity
        : {
            DataValidationProject_Name: dataValidationProjectNameOrEntity!,
            LineNumber: lineNumber!
          }
    );
  }
}
