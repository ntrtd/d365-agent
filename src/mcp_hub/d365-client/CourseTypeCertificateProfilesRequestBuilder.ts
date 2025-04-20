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
import { CourseTypeCertificateProfiles } from './CourseTypeCertificateProfiles';

/**
 * Request builder class for operations supported on the {@link CourseTypeCertificateProfiles} entity.
 */
export class CourseTypeCertificateProfilesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CourseTypeCertificateProfiles<T>, T> {
  /**
   * Returns a request builder for querying all `CourseTypeCertificateProfiles` entities.
   * @returns A request builder for creating requests to retrieve all `CourseTypeCertificateProfiles` entities.
   */
  getAll(): GetAllRequestBuilder<CourseTypeCertificateProfiles<T>, T> {
    return new GetAllRequestBuilder<CourseTypeCertificateProfiles<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CourseTypeCertificateProfiles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CourseTypeCertificateProfiles`.
   */
  create(
    entity: CourseTypeCertificateProfiles<T>
  ): CreateRequestBuilder<CourseTypeCertificateProfiles<T>, T> {
    return new CreateRequestBuilder<CourseTypeCertificateProfiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CourseTypeCertificateProfiles` entity based on its keys.
   * @param courseTypeId Key property. See {@link CourseTypeCertificateProfiles.courseTypeId}.
   * @param certificateTypeId Key property. See {@link CourseTypeCertificateProfiles.certificateTypeId}.
   * @returns A request builder for creating requests to retrieve one `CourseTypeCertificateProfiles` entity based on its keys.
   */
  getByKey(
    courseTypeId: DeserializedType<T, 'Edm.String'>,
    certificateTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CourseTypeCertificateProfiles<T>, T> {
    return new GetByKeyRequestBuilder<CourseTypeCertificateProfiles<T>, T>(
      this.entityApi,
      {
        CourseTypeId: courseTypeId,
        CertificateTypeId: certificateTypeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CourseTypeCertificateProfiles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CourseTypeCertificateProfiles`.
   */
  update(
    entity: CourseTypeCertificateProfiles<T>
  ): UpdateRequestBuilder<CourseTypeCertificateProfiles<T>, T> {
    return new UpdateRequestBuilder<CourseTypeCertificateProfiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CourseTypeCertificateProfiles`.
   * @param courseTypeId Key property. See {@link CourseTypeCertificateProfiles.courseTypeId}.
   * @param certificateTypeId Key property. See {@link CourseTypeCertificateProfiles.certificateTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `CourseTypeCertificateProfiles`.
   */
  delete(
    courseTypeId: string,
    certificateTypeId: string
  ): DeleteRequestBuilder<CourseTypeCertificateProfiles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CourseTypeCertificateProfiles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CourseTypeCertificateProfiles` by taking the entity as a parameter.
   */
  delete(
    entity: CourseTypeCertificateProfiles<T>
  ): DeleteRequestBuilder<CourseTypeCertificateProfiles<T>, T>;
  delete(
    courseTypeIdOrEntity: any,
    certificateTypeId?: string
  ): DeleteRequestBuilder<CourseTypeCertificateProfiles<T>, T> {
    return new DeleteRequestBuilder<CourseTypeCertificateProfiles<T>, T>(
      this.entityApi,
      courseTypeIdOrEntity instanceof CourseTypeCertificateProfiles
        ? courseTypeIdOrEntity
        : {
            CourseTypeId: courseTypeIdOrEntity!,
            CertificateTypeId: certificateTypeId!
          }
    );
  }
}
