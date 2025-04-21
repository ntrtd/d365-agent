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
import { DimensionDefaultTemplates } from './DimensionDefaultTemplates';

/**
 * Request builder class for operations supported on the {@link DimensionDefaultTemplates} entity.
 */
export class DimensionDefaultTemplatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DimensionDefaultTemplates<T>, T> {
  /**
   * Returns a request builder for querying all `DimensionDefaultTemplates` entities.
   * @returns A request builder for creating requests to retrieve all `DimensionDefaultTemplates` entities.
   */
  getAll(): GetAllRequestBuilder<DimensionDefaultTemplates<T>, T> {
    return new GetAllRequestBuilder<DimensionDefaultTemplates<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DimensionDefaultTemplates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DimensionDefaultTemplates`.
   */
  create(
    entity: DimensionDefaultTemplates<T>
  ): CreateRequestBuilder<DimensionDefaultTemplates<T>, T> {
    return new CreateRequestBuilder<DimensionDefaultTemplates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DimensionDefaultTemplates` entity based on its keys.
   * @param dataAreaId Key property. See {@link DimensionDefaultTemplates.dataAreaId}.
   * @param templateName Key property. See {@link DimensionDefaultTemplates.templateName}.
   * @param legalEntityId Key property. See {@link DimensionDefaultTemplates.legalEntityId}.
   * @param defaultDimensionDisplayValue Key property. See {@link DimensionDefaultTemplates.defaultDimensionDisplayValue}.
   * @param lineNum Key property. See {@link DimensionDefaultTemplates.lineNum}.
   * @returns A request builder for creating requests to retrieve one `DimensionDefaultTemplates` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    templateName: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    defaultDimensionDisplayValue: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<DimensionDefaultTemplates<T>, T> {
    return new GetByKeyRequestBuilder<DimensionDefaultTemplates<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TemplateName: templateName,
        LegalEntityId: legalEntityId,
        DefaultDimensionDisplayValue: defaultDimensionDisplayValue,
        LineNum: lineNum
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DimensionDefaultTemplates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DimensionDefaultTemplates`.
   */
  update(
    entity: DimensionDefaultTemplates<T>
  ): UpdateRequestBuilder<DimensionDefaultTemplates<T>, T> {
    return new UpdateRequestBuilder<DimensionDefaultTemplates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DimensionDefaultTemplates`.
   * @param dataAreaId Key property. See {@link DimensionDefaultTemplates.dataAreaId}.
   * @param templateName Key property. See {@link DimensionDefaultTemplates.templateName}.
   * @param legalEntityId Key property. See {@link DimensionDefaultTemplates.legalEntityId}.
   * @param defaultDimensionDisplayValue Key property. See {@link DimensionDefaultTemplates.defaultDimensionDisplayValue}.
   * @param lineNum Key property. See {@link DimensionDefaultTemplates.lineNum}.
   * @returns A request builder for creating requests that delete an entity of type `DimensionDefaultTemplates`.
   */
  delete(
    dataAreaId: string,
    templateName: string,
    legalEntityId: string,
    defaultDimensionDisplayValue: string,
    lineNum: BigNumber
  ): DeleteRequestBuilder<DimensionDefaultTemplates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DimensionDefaultTemplates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DimensionDefaultTemplates` by taking the entity as a parameter.
   */
  delete(
    entity: DimensionDefaultTemplates<T>
  ): DeleteRequestBuilder<DimensionDefaultTemplates<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    templateName?: string,
    legalEntityId?: string,
    defaultDimensionDisplayValue?: string,
    lineNum?: BigNumber
  ): DeleteRequestBuilder<DimensionDefaultTemplates<T>, T> {
    return new DeleteRequestBuilder<DimensionDefaultTemplates<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DimensionDefaultTemplates
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TemplateName: templateName!,
            LegalEntityId: legalEntityId!,
            DefaultDimensionDisplayValue: defaultDimensionDisplayValue!,
            LineNum: lineNum!
          }
    );
  }
}
