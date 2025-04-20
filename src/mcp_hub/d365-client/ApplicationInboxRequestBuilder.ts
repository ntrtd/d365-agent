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
import { ApplicationInbox } from './ApplicationInbox';

/**
 * Request builder class for operations supported on the {@link ApplicationInbox} entity.
 */
export class ApplicationInboxRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ApplicationInbox<T>, T> {
  /**
   * Returns a request builder for querying all `ApplicationInbox` entities.
   * @returns A request builder for creating requests to retrieve all `ApplicationInbox` entities.
   */
  getAll(): GetAllRequestBuilder<ApplicationInbox<T>, T> {
    return new GetAllRequestBuilder<ApplicationInbox<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ApplicationInbox` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ApplicationInbox`.
   */
  create(
    entity: ApplicationInbox<T>
  ): CreateRequestBuilder<ApplicationInbox<T>, T> {
    return new CreateRequestBuilder<ApplicationInbox<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ApplicationInbox` entity based on its keys.
   * @param dataAreaId Key property. See {@link ApplicationInbox.dataAreaId}.
   * @param applicant Key property. See {@link ApplicationInbox.applicant}.
   * @param recruitmentProject Key property. See {@link ApplicationInbox.recruitmentProject}.
   * @returns A request builder for creating requests to retrieve one `ApplicationInbox` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    applicant: DeserializedType<T, 'Edm.String'>,
    recruitmentProject: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ApplicationInbox<T>, T> {
    return new GetByKeyRequestBuilder<ApplicationInbox<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Applicant: applicant,
      RecruitmentProject: recruitmentProject
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ApplicationInbox`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ApplicationInbox`.
   */
  update(
    entity: ApplicationInbox<T>
  ): UpdateRequestBuilder<ApplicationInbox<T>, T> {
    return new UpdateRequestBuilder<ApplicationInbox<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ApplicationInbox`.
   * @param dataAreaId Key property. See {@link ApplicationInbox.dataAreaId}.
   * @param applicant Key property. See {@link ApplicationInbox.applicant}.
   * @param recruitmentProject Key property. See {@link ApplicationInbox.recruitmentProject}.
   * @returns A request builder for creating requests that delete an entity of type `ApplicationInbox`.
   */
  delete(
    dataAreaId: string,
    applicant: string,
    recruitmentProject: string
  ): DeleteRequestBuilder<ApplicationInbox<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ApplicationInbox`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ApplicationInbox` by taking the entity as a parameter.
   */
  delete(
    entity: ApplicationInbox<T>
  ): DeleteRequestBuilder<ApplicationInbox<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    applicant?: string,
    recruitmentProject?: string
  ): DeleteRequestBuilder<ApplicationInbox<T>, T> {
    return new DeleteRequestBuilder<ApplicationInbox<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ApplicationInbox
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Applicant: applicant!,
            RecruitmentProject: recruitmentProject!
          }
    );
  }
}
