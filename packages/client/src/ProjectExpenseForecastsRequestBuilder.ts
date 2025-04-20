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
import { ProjectExpenseForecasts } from './ProjectExpenseForecasts';

/**
 * Request builder class for operations supported on the {@link ProjectExpenseForecasts} entity.
 */
export class ProjectExpenseForecastsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectExpenseForecasts<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectExpenseForecasts` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectExpenseForecasts` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectExpenseForecasts<T>, T> {
    return new GetAllRequestBuilder<ProjectExpenseForecasts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjectExpenseForecasts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectExpenseForecasts`.
   */
  create(
    entity: ProjectExpenseForecasts<T>
  ): CreateRequestBuilder<ProjectExpenseForecasts<T>, T> {
    return new CreateRequestBuilder<ProjectExpenseForecasts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjectExpenseForecasts` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjectExpenseForecasts.dataAreaId}.
   * @param transId Key property. See {@link ProjectExpenseForecasts.transId}.
   * @returns A request builder for creating requests to retrieve one `ProjectExpenseForecasts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    transId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjectExpenseForecasts<T>, T> {
    return new GetByKeyRequestBuilder<ProjectExpenseForecasts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TransId: transId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectExpenseForecasts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectExpenseForecasts`.
   */
  update(
    entity: ProjectExpenseForecasts<T>
  ): UpdateRequestBuilder<ProjectExpenseForecasts<T>, T> {
    return new UpdateRequestBuilder<ProjectExpenseForecasts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectExpenseForecasts`.
   * @param dataAreaId Key property. See {@link ProjectExpenseForecasts.dataAreaId}.
   * @param transId Key property. See {@link ProjectExpenseForecasts.transId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectExpenseForecasts`.
   */
  delete(
    dataAreaId: string,
    transId: string
  ): DeleteRequestBuilder<ProjectExpenseForecasts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectExpenseForecasts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectExpenseForecasts` by taking the entity as a parameter.
   */
  delete(
    entity: ProjectExpenseForecasts<T>
  ): DeleteRequestBuilder<ProjectExpenseForecasts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    transId?: string
  ): DeleteRequestBuilder<ProjectExpenseForecasts<T>, T> {
    return new DeleteRequestBuilder<ProjectExpenseForecasts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjectExpenseForecasts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TransId: transId!
          }
    );
  }
}
