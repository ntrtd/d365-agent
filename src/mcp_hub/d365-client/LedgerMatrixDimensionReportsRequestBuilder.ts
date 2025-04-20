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
import { LedgerMatrixDimensionReports } from './LedgerMatrixDimensionReports';

/**
 * Request builder class for operations supported on the {@link LedgerMatrixDimensionReports} entity.
 */
export class LedgerMatrixDimensionReportsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LedgerMatrixDimensionReports<T>, T> {
  /**
   * Returns a request builder for querying all `LedgerMatrixDimensionReports` entities.
   * @returns A request builder for creating requests to retrieve all `LedgerMatrixDimensionReports` entities.
   */
  getAll(): GetAllRequestBuilder<LedgerMatrixDimensionReports<T>, T> {
    return new GetAllRequestBuilder<LedgerMatrixDimensionReports<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LedgerMatrixDimensionReports` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LedgerMatrixDimensionReports`.
   */
  create(
    entity: LedgerMatrixDimensionReports<T>
  ): CreateRequestBuilder<LedgerMatrixDimensionReports<T>, T> {
    return new CreateRequestBuilder<LedgerMatrixDimensionReports<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LedgerMatrixDimensionReports` entity based on its keys.
   * @param dataAreaId Key property. See {@link LedgerMatrixDimensionReports.dataAreaId}.
   * @param dimensionMatrix Key property. See {@link LedgerMatrixDimensionReports.dimensionMatrix}.
   * @param dimensionValue Key property. See {@link LedgerMatrixDimensionReports.dimensionValue}.
   * @returns A request builder for creating requests to retrieve one `LedgerMatrixDimensionReports` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    dimensionMatrix: DeserializedType<T, 'Edm.String'>,
    dimensionValue: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LedgerMatrixDimensionReports<T>, T> {
    return new GetByKeyRequestBuilder<LedgerMatrixDimensionReports<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        DimensionMatrix: dimensionMatrix,
        DimensionValue: dimensionValue
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LedgerMatrixDimensionReports`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LedgerMatrixDimensionReports`.
   */
  update(
    entity: LedgerMatrixDimensionReports<T>
  ): UpdateRequestBuilder<LedgerMatrixDimensionReports<T>, T> {
    return new UpdateRequestBuilder<LedgerMatrixDimensionReports<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LedgerMatrixDimensionReports`.
   * @param dataAreaId Key property. See {@link LedgerMatrixDimensionReports.dataAreaId}.
   * @param dimensionMatrix Key property. See {@link LedgerMatrixDimensionReports.dimensionMatrix}.
   * @param dimensionValue Key property. See {@link LedgerMatrixDimensionReports.dimensionValue}.
   * @returns A request builder for creating requests that delete an entity of type `LedgerMatrixDimensionReports`.
   */
  delete(
    dataAreaId: string,
    dimensionMatrix: string,
    dimensionValue: string
  ): DeleteRequestBuilder<LedgerMatrixDimensionReports<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LedgerMatrixDimensionReports`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LedgerMatrixDimensionReports` by taking the entity as a parameter.
   */
  delete(
    entity: LedgerMatrixDimensionReports<T>
  ): DeleteRequestBuilder<LedgerMatrixDimensionReports<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    dimensionMatrix?: string,
    dimensionValue?: string
  ): DeleteRequestBuilder<LedgerMatrixDimensionReports<T>, T> {
    return new DeleteRequestBuilder<LedgerMatrixDimensionReports<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LedgerMatrixDimensionReports
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DimensionMatrix: dimensionMatrix!,
            DimensionValue: dimensionValue!
          }
    );
  }
}
