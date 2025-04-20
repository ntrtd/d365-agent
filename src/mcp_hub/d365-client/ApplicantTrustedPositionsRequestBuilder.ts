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
import { ApplicantTrustedPositions } from './ApplicantTrustedPositions';

/**
 * Request builder class for operations supported on the {@link ApplicantTrustedPositions} entity.
 */
export class ApplicantTrustedPositionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ApplicantTrustedPositions<T>, T> {
  /**
   * Returns a request builder for querying all `ApplicantTrustedPositions` entities.
   * @returns A request builder for creating requests to retrieve all `ApplicantTrustedPositions` entities.
   */
  getAll(): GetAllRequestBuilder<ApplicantTrustedPositions<T>, T> {
    return new GetAllRequestBuilder<ApplicantTrustedPositions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ApplicantTrustedPositions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ApplicantTrustedPositions`.
   */
  create(
    entity: ApplicantTrustedPositions<T>
  ): CreateRequestBuilder<ApplicantTrustedPositions<T>, T> {
    return new CreateRequestBuilder<ApplicantTrustedPositions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ApplicantTrustedPositions` entity based on its keys.
   * @param applicantId Key property. See {@link ApplicantTrustedPositions.applicantId}.
   * @param position Key property. See {@link ApplicantTrustedPositions.position}.
   * @param employer Key property. See {@link ApplicantTrustedPositions.employer}.
   * @returns A request builder for creating requests to retrieve one `ApplicantTrustedPositions` entity based on its keys.
   */
  getByKey(
    applicantId: DeserializedType<T, 'Edm.String'>,
    position: DeserializedType<T, 'Edm.String'>,
    employer: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ApplicantTrustedPositions<T>, T> {
    return new GetByKeyRequestBuilder<ApplicantTrustedPositions<T>, T>(
      this.entityApi,
      {
        ApplicantId: applicantId,
        Position: position,
        Employer: employer
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ApplicantTrustedPositions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ApplicantTrustedPositions`.
   */
  update(
    entity: ApplicantTrustedPositions<T>
  ): UpdateRequestBuilder<ApplicantTrustedPositions<T>, T> {
    return new UpdateRequestBuilder<ApplicantTrustedPositions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ApplicantTrustedPositions`.
   * @param applicantId Key property. See {@link ApplicantTrustedPositions.applicantId}.
   * @param position Key property. See {@link ApplicantTrustedPositions.position}.
   * @param employer Key property. See {@link ApplicantTrustedPositions.employer}.
   * @returns A request builder for creating requests that delete an entity of type `ApplicantTrustedPositions`.
   */
  delete(
    applicantId: string,
    position: string,
    employer: string
  ): DeleteRequestBuilder<ApplicantTrustedPositions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ApplicantTrustedPositions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ApplicantTrustedPositions` by taking the entity as a parameter.
   */
  delete(
    entity: ApplicantTrustedPositions<T>
  ): DeleteRequestBuilder<ApplicantTrustedPositions<T>, T>;
  delete(
    applicantIdOrEntity: any,
    position?: string,
    employer?: string
  ): DeleteRequestBuilder<ApplicantTrustedPositions<T>, T> {
    return new DeleteRequestBuilder<ApplicantTrustedPositions<T>, T>(
      this.entityApi,
      applicantIdOrEntity instanceof ApplicantTrustedPositions
        ? applicantIdOrEntity
        : {
            ApplicantId: applicantIdOrEntity!,
            Position: position!,
            Employer: employer!
          }
    );
  }
}
