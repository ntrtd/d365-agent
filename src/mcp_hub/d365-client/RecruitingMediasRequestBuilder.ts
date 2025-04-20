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
import { RecruitingMedias } from './RecruitingMedias';

/**
 * Request builder class for operations supported on the {@link RecruitingMedias} entity.
 */
export class RecruitingMediasRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RecruitingMedias<T>, T> {
  /**
   * Returns a request builder for querying all `RecruitingMedias` entities.
   * @returns A request builder for creating requests to retrieve all `RecruitingMedias` entities.
   */
  getAll(): GetAllRequestBuilder<RecruitingMedias<T>, T> {
    return new GetAllRequestBuilder<RecruitingMedias<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RecruitingMedias` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RecruitingMedias`.
   */
  create(
    entity: RecruitingMedias<T>
  ): CreateRequestBuilder<RecruitingMedias<T>, T> {
    return new CreateRequestBuilder<RecruitingMedias<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RecruitingMedias` entity based on its keys.
   * @param dataAreaId Key property. See {@link RecruitingMedias.dataAreaId}.
   * @param recruitmentProject Key property. See {@link RecruitingMedias.recruitmentProject}.
   * @param media Key property. See {@link RecruitingMedias.media}.
   * @returns A request builder for creating requests to retrieve one `RecruitingMedias` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    recruitmentProject: DeserializedType<T, 'Edm.String'>,
    media: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RecruitingMedias<T>, T> {
    return new GetByKeyRequestBuilder<RecruitingMedias<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      RecruitmentProject: recruitmentProject,
      Media: media
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RecruitingMedias`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RecruitingMedias`.
   */
  update(
    entity: RecruitingMedias<T>
  ): UpdateRequestBuilder<RecruitingMedias<T>, T> {
    return new UpdateRequestBuilder<RecruitingMedias<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RecruitingMedias`.
   * @param dataAreaId Key property. See {@link RecruitingMedias.dataAreaId}.
   * @param recruitmentProject Key property. See {@link RecruitingMedias.recruitmentProject}.
   * @param media Key property. See {@link RecruitingMedias.media}.
   * @returns A request builder for creating requests that delete an entity of type `RecruitingMedias`.
   */
  delete(
    dataAreaId: string,
    recruitmentProject: string,
    media: string
  ): DeleteRequestBuilder<RecruitingMedias<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RecruitingMedias`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RecruitingMedias` by taking the entity as a parameter.
   */
  delete(
    entity: RecruitingMedias<T>
  ): DeleteRequestBuilder<RecruitingMedias<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    recruitmentProject?: string,
    media?: string
  ): DeleteRequestBuilder<RecruitingMedias<T>, T> {
    return new DeleteRequestBuilder<RecruitingMedias<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RecruitingMedias
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RecruitmentProject: recruitmentProject!,
            Media: media!
          }
    );
  }
}
