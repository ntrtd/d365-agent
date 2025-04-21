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
import { CommodityPricingTemplates } from './CommodityPricingTemplates';

/**
 * Request builder class for operations supported on the {@link CommodityPricingTemplates} entity.
 */
export class CommodityPricingTemplatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CommodityPricingTemplates<T>, T> {
  /**
   * Returns a request builder for querying all `CommodityPricingTemplates` entities.
   * @returns A request builder for creating requests to retrieve all `CommodityPricingTemplates` entities.
   */
  getAll(): GetAllRequestBuilder<CommodityPricingTemplates<T>, T> {
    return new GetAllRequestBuilder<CommodityPricingTemplates<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CommodityPricingTemplates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CommodityPricingTemplates`.
   */
  create(
    entity: CommodityPricingTemplates<T>
  ): CreateRequestBuilder<CommodityPricingTemplates<T>, T> {
    return new CreateRequestBuilder<CommodityPricingTemplates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CommodityPricingTemplates` entity based on its keys.
   * @param dataAreaId Key property. See {@link CommodityPricingTemplates.dataAreaId}.
   * @param templateId Key property. See {@link CommodityPricingTemplates.templateId}.
   * @returns A request builder for creating requests to retrieve one `CommodityPricingTemplates` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    templateId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CommodityPricingTemplates<T>, T> {
    return new GetByKeyRequestBuilder<CommodityPricingTemplates<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TemplateId: templateId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CommodityPricingTemplates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CommodityPricingTemplates`.
   */
  update(
    entity: CommodityPricingTemplates<T>
  ): UpdateRequestBuilder<CommodityPricingTemplates<T>, T> {
    return new UpdateRequestBuilder<CommodityPricingTemplates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CommodityPricingTemplates`.
   * @param dataAreaId Key property. See {@link CommodityPricingTemplates.dataAreaId}.
   * @param templateId Key property. See {@link CommodityPricingTemplates.templateId}.
   * @returns A request builder for creating requests that delete an entity of type `CommodityPricingTemplates`.
   */
  delete(
    dataAreaId: string,
    templateId: string
  ): DeleteRequestBuilder<CommodityPricingTemplates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CommodityPricingTemplates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CommodityPricingTemplates` by taking the entity as a parameter.
   */
  delete(
    entity: CommodityPricingTemplates<T>
  ): DeleteRequestBuilder<CommodityPricingTemplates<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    templateId?: string
  ): DeleteRequestBuilder<CommodityPricingTemplates<T>, T> {
    return new DeleteRequestBuilder<CommodityPricingTemplates<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CommodityPricingTemplates
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TemplateId: templateId!
          }
    );
  }
}
