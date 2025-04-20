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
import { AssetMaintenanceChecklistTemplateLines } from './AssetMaintenanceChecklistTemplateLines';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceChecklistTemplateLines} entity.
 */
export class AssetMaintenanceChecklistTemplateLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceChecklistTemplateLines<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceChecklistTemplateLines` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceChecklistTemplateLines` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceChecklistTemplateLines<T>, T> {
    return new GetAllRequestBuilder<
      AssetMaintenanceChecklistTemplateLines<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceChecklistTemplateLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceChecklistTemplateLines`.
   */
  create(
    entity: AssetMaintenanceChecklistTemplateLines<T>
  ): CreateRequestBuilder<AssetMaintenanceChecklistTemplateLines<T>, T> {
    return new CreateRequestBuilder<
      AssetMaintenanceChecklistTemplateLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceChecklistTemplateLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceChecklistTemplateLines.dataAreaId}.
   * @param checklistTemplateId Key property. See {@link AssetMaintenanceChecklistTemplateLines.checklistTemplateId}.
   * @param lineNumber Key property. See {@link AssetMaintenanceChecklistTemplateLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceChecklistTemplateLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    checklistTemplateId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<AssetMaintenanceChecklistTemplateLines<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceChecklistTemplateLines<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      ChecklistTemplateId: checklistTemplateId,
      LineNumber: lineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceChecklistTemplateLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceChecklistTemplateLines`.
   */
  update(
    entity: AssetMaintenanceChecklistTemplateLines<T>
  ): UpdateRequestBuilder<AssetMaintenanceChecklistTemplateLines<T>, T> {
    return new UpdateRequestBuilder<
      AssetMaintenanceChecklistTemplateLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceChecklistTemplateLines`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceChecklistTemplateLines.dataAreaId}.
   * @param checklistTemplateId Key property. See {@link AssetMaintenanceChecklistTemplateLines.checklistTemplateId}.
   * @param lineNumber Key property. See {@link AssetMaintenanceChecklistTemplateLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceChecklistTemplateLines`.
   */
  delete(
    dataAreaId: string,
    checklistTemplateId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<AssetMaintenanceChecklistTemplateLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceChecklistTemplateLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceChecklistTemplateLines` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceChecklistTemplateLines<T>
  ): DeleteRequestBuilder<AssetMaintenanceChecklistTemplateLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    checklistTemplateId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<AssetMaintenanceChecklistTemplateLines<T>, T> {
    return new DeleteRequestBuilder<
      AssetMaintenanceChecklistTemplateLines<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceChecklistTemplateLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ChecklistTemplateId: checklistTemplateId!,
            LineNumber: lineNumber!
          }
    );
  }
}
