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
import { AssetMaintenanceChecklistVariableValues } from './AssetMaintenanceChecklistVariableValues';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceChecklistVariableValues} entity.
 */
export class AssetMaintenanceChecklistVariableValuesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceChecklistVariableValues<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceChecklistVariableValues` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceChecklistVariableValues` entities.
   */
  getAll(): GetAllRequestBuilder<
    AssetMaintenanceChecklistVariableValues<T>,
    T
  > {
    return new GetAllRequestBuilder<
      AssetMaintenanceChecklistVariableValues<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceChecklistVariableValues` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceChecklistVariableValues`.
   */
  create(
    entity: AssetMaintenanceChecklistVariableValues<T>
  ): CreateRequestBuilder<AssetMaintenanceChecklistVariableValues<T>, T> {
    return new CreateRequestBuilder<
      AssetMaintenanceChecklistVariableValues<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceChecklistVariableValues` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceChecklistVariableValues.dataAreaId}.
   * @param checklistVariableId Key property. See {@link AssetMaintenanceChecklistVariableValues.checklistVariableId}.
   * @param lineNumber Key property. See {@link AssetMaintenanceChecklistVariableValues.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceChecklistVariableValues` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    checklistVariableId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<AssetMaintenanceChecklistVariableValues<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceChecklistVariableValues<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      ChecklistVariableId: checklistVariableId,
      LineNumber: lineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceChecklistVariableValues`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceChecklistVariableValues`.
   */
  update(
    entity: AssetMaintenanceChecklistVariableValues<T>
  ): UpdateRequestBuilder<AssetMaintenanceChecklistVariableValues<T>, T> {
    return new UpdateRequestBuilder<
      AssetMaintenanceChecklistVariableValues<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceChecklistVariableValues`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceChecklistVariableValues.dataAreaId}.
   * @param checklistVariableId Key property. See {@link AssetMaintenanceChecklistVariableValues.checklistVariableId}.
   * @param lineNumber Key property. See {@link AssetMaintenanceChecklistVariableValues.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceChecklistVariableValues`.
   */
  delete(
    dataAreaId: string,
    checklistVariableId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<AssetMaintenanceChecklistVariableValues<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceChecklistVariableValues`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceChecklistVariableValues` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceChecklistVariableValues<T>
  ): DeleteRequestBuilder<AssetMaintenanceChecklistVariableValues<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    checklistVariableId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<AssetMaintenanceChecklistVariableValues<T>, T> {
    return new DeleteRequestBuilder<
      AssetMaintenanceChecklistVariableValues<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceChecklistVariableValues
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ChecklistVariableId: checklistVariableId!,
            LineNumber: lineNumber!
          }
    );
  }
}
