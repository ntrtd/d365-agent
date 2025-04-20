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
import { ValidationProjectTaskStatus } from './ValidationProjectTaskStatus';

/**
 * Request builder class for operations supported on the {@link ValidationProjectTaskStatus} entity.
 */
export class ValidationProjectTaskStatusRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ValidationProjectTaskStatus<T>, T> {
  /**
   * Returns a request builder for querying all `ValidationProjectTaskStatus` entities.
   * @returns A request builder for creating requests to retrieve all `ValidationProjectTaskStatus` entities.
   */
  getAll(): GetAllRequestBuilder<ValidationProjectTaskStatus<T>, T> {
    return new GetAllRequestBuilder<ValidationProjectTaskStatus<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ValidationProjectTaskStatus` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ValidationProjectTaskStatus`.
   */
  create(
    entity: ValidationProjectTaskStatus<T>
  ): CreateRequestBuilder<ValidationProjectTaskStatus<T>, T> {
    return new CreateRequestBuilder<ValidationProjectTaskStatus<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ValidationProjectTaskStatus` entity based on its keys.
   * @param dataValidationProjectName Key property. See {@link ValidationProjectTaskStatus.dataValidationProjectName}.
   * @param dataValidationProjectTaskLineNumber Key property. See {@link ValidationProjectTaskStatus.dataValidationProjectTaskLineNumber}.
   * @param legalEntity Key property. See {@link ValidationProjectTaskStatus.legalEntity}.
   * @returns A request builder for creating requests to retrieve one `ValidationProjectTaskStatus` entity based on its keys.
   */
  getByKey(
    dataValidationProjectName: DeserializedType<T, 'Edm.String'>,
    dataValidationProjectTaskLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    legalEntity: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ValidationProjectTaskStatus<T>, T> {
    return new GetByKeyRequestBuilder<ValidationProjectTaskStatus<T>, T>(
      this.entityApi,
      {
        DataValidationProject_Name: dataValidationProjectName,
        DataValidationProjectTask_LineNumber:
          dataValidationProjectTaskLineNumber,
        LegalEntity: legalEntity
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ValidationProjectTaskStatus`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ValidationProjectTaskStatus`.
   */
  update(
    entity: ValidationProjectTaskStatus<T>
  ): UpdateRequestBuilder<ValidationProjectTaskStatus<T>, T> {
    return new UpdateRequestBuilder<ValidationProjectTaskStatus<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ValidationProjectTaskStatus`.
   * @param dataValidationProjectName Key property. See {@link ValidationProjectTaskStatus.dataValidationProjectName}.
   * @param dataValidationProjectTaskLineNumber Key property. See {@link ValidationProjectTaskStatus.dataValidationProjectTaskLineNumber}.
   * @param legalEntity Key property. See {@link ValidationProjectTaskStatus.legalEntity}.
   * @returns A request builder for creating requests that delete an entity of type `ValidationProjectTaskStatus`.
   */
  delete(
    dataValidationProjectName: string,
    dataValidationProjectTaskLineNumber: BigNumber,
    legalEntity: string
  ): DeleteRequestBuilder<ValidationProjectTaskStatus<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ValidationProjectTaskStatus`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ValidationProjectTaskStatus` by taking the entity as a parameter.
   */
  delete(
    entity: ValidationProjectTaskStatus<T>
  ): DeleteRequestBuilder<ValidationProjectTaskStatus<T>, T>;
  delete(
    dataValidationProjectNameOrEntity: any,
    dataValidationProjectTaskLineNumber?: BigNumber,
    legalEntity?: string
  ): DeleteRequestBuilder<ValidationProjectTaskStatus<T>, T> {
    return new DeleteRequestBuilder<ValidationProjectTaskStatus<T>, T>(
      this.entityApi,
      dataValidationProjectNameOrEntity instanceof ValidationProjectTaskStatus
        ? dataValidationProjectNameOrEntity
        : {
            DataValidationProject_Name: dataValidationProjectNameOrEntity!,
            DataValidationProjectTask_LineNumber:
              dataValidationProjectTaskLineNumber!,
            LegalEntity: legalEntity!
          }
    );
  }
}
