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
import { AdaRequirementReports } from './AdaRequirementReports';

/**
 * Request builder class for operations supported on the {@link AdaRequirementReports} entity.
 */
export class AdaRequirementReportsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AdaRequirementReports<T>, T> {
  /**
   * Returns a request builder for querying all `AdaRequirementReports` entities.
   * @returns A request builder for creating requests to retrieve all `AdaRequirementReports` entities.
   */
  getAll(): GetAllRequestBuilder<AdaRequirementReports<T>, T> {
    return new GetAllRequestBuilder<AdaRequirementReports<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AdaRequirementReports` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AdaRequirementReports`.
   */
  create(
    entity: AdaRequirementReports<T>
  ): CreateRequestBuilder<AdaRequirementReports<T>, T> {
    return new CreateRequestBuilder<AdaRequirementReports<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AdaRequirementReports` entity based on its keys.
   * @param jobId Key property. See {@link AdaRequirementReports.jobId}.
   * @param jobTemplateId Key property. See {@link AdaRequirementReports.jobTemplateId}.
   * @returns A request builder for creating requests to retrieve one `AdaRequirementReports` entity based on its keys.
   */
  getByKey(
    jobId: DeserializedType<T, 'Edm.String'>,
    jobTemplateId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AdaRequirementReports<T>, T> {
    return new GetByKeyRequestBuilder<AdaRequirementReports<T>, T>(
      this.entityApi,
      {
        JobId: jobId,
        JobTemplateId: jobTemplateId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AdaRequirementReports`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AdaRequirementReports`.
   */
  update(
    entity: AdaRequirementReports<T>
  ): UpdateRequestBuilder<AdaRequirementReports<T>, T> {
    return new UpdateRequestBuilder<AdaRequirementReports<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AdaRequirementReports`.
   * @param jobId Key property. See {@link AdaRequirementReports.jobId}.
   * @param jobTemplateId Key property. See {@link AdaRequirementReports.jobTemplateId}.
   * @returns A request builder for creating requests that delete an entity of type `AdaRequirementReports`.
   */
  delete(
    jobId: string,
    jobTemplateId: string
  ): DeleteRequestBuilder<AdaRequirementReports<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AdaRequirementReports`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AdaRequirementReports` by taking the entity as a parameter.
   */
  delete(
    entity: AdaRequirementReports<T>
  ): DeleteRequestBuilder<AdaRequirementReports<T>, T>;
  delete(
    jobIdOrEntity: any,
    jobTemplateId?: string
  ): DeleteRequestBuilder<AdaRequirementReports<T>, T> {
    return new DeleteRequestBuilder<AdaRequirementReports<T>, T>(
      this.entityApi,
      jobIdOrEntity instanceof AdaRequirementReports
        ? jobIdOrEntity
        : {
            JobId: jobIdOrEntity!,
            JobTemplateId: jobTemplateId!
          }
    );
  }
}
