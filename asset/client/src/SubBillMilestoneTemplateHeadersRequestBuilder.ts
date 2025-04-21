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
import { SubBillMilestoneTemplateHeaders } from './SubBillMilestoneTemplateHeaders';

/**
 * Request builder class for operations supported on the {@link SubBillMilestoneTemplateHeaders} entity.
 */
export class SubBillMilestoneTemplateHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillMilestoneTemplateHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillMilestoneTemplateHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillMilestoneTemplateHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<SubBillMilestoneTemplateHeaders<T>, T> {
    return new GetAllRequestBuilder<SubBillMilestoneTemplateHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SubBillMilestoneTemplateHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillMilestoneTemplateHeaders`.
   */
  create(
    entity: SubBillMilestoneTemplateHeaders<T>
  ): CreateRequestBuilder<SubBillMilestoneTemplateHeaders<T>, T> {
    return new CreateRequestBuilder<SubBillMilestoneTemplateHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SubBillMilestoneTemplateHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillMilestoneTemplateHeaders.dataAreaId}.
   * @param milestoneTemplate Key property. See {@link SubBillMilestoneTemplateHeaders.milestoneTemplate}.
   * @returns A request builder for creating requests to retrieve one `SubBillMilestoneTemplateHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    milestoneTemplate: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SubBillMilestoneTemplateHeaders<T>, T> {
    return new GetByKeyRequestBuilder<SubBillMilestoneTemplateHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        MilestoneTemplate: milestoneTemplate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillMilestoneTemplateHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillMilestoneTemplateHeaders`.
   */
  update(
    entity: SubBillMilestoneTemplateHeaders<T>
  ): UpdateRequestBuilder<SubBillMilestoneTemplateHeaders<T>, T> {
    return new UpdateRequestBuilder<SubBillMilestoneTemplateHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillMilestoneTemplateHeaders`.
   * @param dataAreaId Key property. See {@link SubBillMilestoneTemplateHeaders.dataAreaId}.
   * @param milestoneTemplate Key property. See {@link SubBillMilestoneTemplateHeaders.milestoneTemplate}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillMilestoneTemplateHeaders`.
   */
  delete(
    dataAreaId: string,
    milestoneTemplate: string
  ): DeleteRequestBuilder<SubBillMilestoneTemplateHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillMilestoneTemplateHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillMilestoneTemplateHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillMilestoneTemplateHeaders<T>
  ): DeleteRequestBuilder<SubBillMilestoneTemplateHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    milestoneTemplate?: string
  ): DeleteRequestBuilder<SubBillMilestoneTemplateHeaders<T>, T> {
    return new DeleteRequestBuilder<SubBillMilestoneTemplateHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillMilestoneTemplateHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MilestoneTemplate: milestoneTemplate!
          }
    );
  }
}
