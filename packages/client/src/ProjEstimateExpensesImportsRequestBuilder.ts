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
import { ProjEstimateExpensesImports } from './ProjEstimateExpensesImports';

/**
 * Request builder class for operations supported on the {@link ProjEstimateExpensesImports} entity.
 */
export class ProjEstimateExpensesImportsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjEstimateExpensesImports<T>, T> {
  /**
   * Returns a request builder for querying all `ProjEstimateExpensesImports` entities.
   * @returns A request builder for creating requests to retrieve all `ProjEstimateExpensesImports` entities.
   */
  getAll(): GetAllRequestBuilder<ProjEstimateExpensesImports<T>, T> {
    return new GetAllRequestBuilder<ProjEstimateExpensesImports<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjEstimateExpensesImports` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjEstimateExpensesImports`.
   */
  create(
    entity: ProjEstimateExpensesImports<T>
  ): CreateRequestBuilder<ProjEstimateExpensesImports<T>, T> {
    return new CreateRequestBuilder<ProjEstimateExpensesImports<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjEstimateExpensesImports` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjEstimateExpensesImports.dataAreaId}.
   * @param estimateExpensesImportId Key property. See {@link ProjEstimateExpensesImports.estimateExpensesImportId}.
   * @returns A request builder for creating requests to retrieve one `ProjEstimateExpensesImports` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    estimateExpensesImportId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<ProjEstimateExpensesImports<T>, T> {
    return new GetByKeyRequestBuilder<ProjEstimateExpensesImports<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        EstimateExpensesImportId: estimateExpensesImportId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjEstimateExpensesImports`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjEstimateExpensesImports`.
   */
  update(
    entity: ProjEstimateExpensesImports<T>
  ): UpdateRequestBuilder<ProjEstimateExpensesImports<T>, T> {
    return new UpdateRequestBuilder<ProjEstimateExpensesImports<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjEstimateExpensesImports`.
   * @param dataAreaId Key property. See {@link ProjEstimateExpensesImports.dataAreaId}.
   * @param estimateExpensesImportId Key property. See {@link ProjEstimateExpensesImports.estimateExpensesImportId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjEstimateExpensesImports`.
   */
  delete(
    dataAreaId: string,
    estimateExpensesImportId: string
  ): DeleteRequestBuilder<ProjEstimateExpensesImports<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjEstimateExpensesImports`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjEstimateExpensesImports` by taking the entity as a parameter.
   */
  delete(
    entity: ProjEstimateExpensesImports<T>
  ): DeleteRequestBuilder<ProjEstimateExpensesImports<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    estimateExpensesImportId?: string
  ): DeleteRequestBuilder<ProjEstimateExpensesImports<T>, T> {
    return new DeleteRequestBuilder<ProjEstimateExpensesImports<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjEstimateExpensesImports
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            EstimateExpensesImportId: estimateExpensesImportId!
          }
    );
  }
}
