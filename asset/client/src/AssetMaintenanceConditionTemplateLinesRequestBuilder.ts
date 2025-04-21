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
import { AssetMaintenanceConditionTemplateLines } from './AssetMaintenanceConditionTemplateLines';

/**
 * Request builder class for operations supported on the {@link AssetMaintenanceConditionTemplateLines} entity.
 */
export class AssetMaintenanceConditionTemplateLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetMaintenanceConditionTemplateLines<T>, T> {
  /**
   * Returns a request builder for querying all `AssetMaintenanceConditionTemplateLines` entities.
   * @returns A request builder for creating requests to retrieve all `AssetMaintenanceConditionTemplateLines` entities.
   */
  getAll(): GetAllRequestBuilder<AssetMaintenanceConditionTemplateLines<T>, T> {
    return new GetAllRequestBuilder<
      AssetMaintenanceConditionTemplateLines<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetMaintenanceConditionTemplateLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetMaintenanceConditionTemplateLines`.
   */
  create(
    entity: AssetMaintenanceConditionTemplateLines<T>
  ): CreateRequestBuilder<AssetMaintenanceConditionTemplateLines<T>, T> {
    return new CreateRequestBuilder<
      AssetMaintenanceConditionTemplateLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `AssetMaintenanceConditionTemplateLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetMaintenanceConditionTemplateLines.dataAreaId}.
   * @param conditionTemplateId Key property. See {@link AssetMaintenanceConditionTemplateLines.conditionTemplateId}.
   * @param lineNum Key property. See {@link AssetMaintenanceConditionTemplateLines.lineNum}.
   * @returns A request builder for creating requests to retrieve one `AssetMaintenanceConditionTemplateLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    conditionTemplateId: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<AssetMaintenanceConditionTemplateLines<T>, T> {
    return new GetByKeyRequestBuilder<
      AssetMaintenanceConditionTemplateLines<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      ConditionTemplateId: conditionTemplateId,
      LineNum: lineNum
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetMaintenanceConditionTemplateLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetMaintenanceConditionTemplateLines`.
   */
  update(
    entity: AssetMaintenanceConditionTemplateLines<T>
  ): UpdateRequestBuilder<AssetMaintenanceConditionTemplateLines<T>, T> {
    return new UpdateRequestBuilder<
      AssetMaintenanceConditionTemplateLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceConditionTemplateLines`.
   * @param dataAreaId Key property. See {@link AssetMaintenanceConditionTemplateLines.dataAreaId}.
   * @param conditionTemplateId Key property. See {@link AssetMaintenanceConditionTemplateLines.conditionTemplateId}.
   * @param lineNum Key property. See {@link AssetMaintenanceConditionTemplateLines.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceConditionTemplateLines`.
   */
  delete(
    dataAreaId: string,
    conditionTemplateId: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<AssetMaintenanceConditionTemplateLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetMaintenanceConditionTemplateLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetMaintenanceConditionTemplateLines` by taking the entity as a parameter.
   */
  delete(
    entity: AssetMaintenanceConditionTemplateLines<T>
  ): DeleteRequestBuilder<AssetMaintenanceConditionTemplateLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    conditionTemplateId?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<AssetMaintenanceConditionTemplateLines<T>, T> {
    return new DeleteRequestBuilder<
      AssetMaintenanceConditionTemplateLines<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetMaintenanceConditionTemplateLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ConditionTemplateId: conditionTemplateId!,
            LineNum: lineNum!
          }
    );
  }
}
