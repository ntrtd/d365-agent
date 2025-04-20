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
import { CandidatesToHire } from './CandidatesToHire';

/**
 * Request builder class for operations supported on the {@link CandidatesToHire} entity.
 */
export class CandidatesToHireRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CandidatesToHire<T>, T> {
  /**
   * Returns a request builder for querying all `CandidatesToHire` entities.
   * @returns A request builder for creating requests to retrieve all `CandidatesToHire` entities.
   */
  getAll(): GetAllRequestBuilder<CandidatesToHire<T>, T> {
    return new GetAllRequestBuilder<CandidatesToHire<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CandidatesToHire` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CandidatesToHire`.
   */
  create(
    entity: CandidatesToHire<T>
  ): CreateRequestBuilder<CandidatesToHire<T>, T> {
    return new CreateRequestBuilder<CandidatesToHire<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CandidatesToHire` entity based on its keys.
   * @param dataAreaId Key property. See {@link CandidatesToHire.dataAreaId}.
   * @param candidateId Key property. See {@link CandidatesToHire.candidateId}.
   * @returns A request builder for creating requests to retrieve one `CandidatesToHire` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    candidateId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CandidatesToHire<T>, T> {
    return new GetByKeyRequestBuilder<CandidatesToHire<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      CandidateId: candidateId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CandidatesToHire`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CandidatesToHire`.
   */
  update(
    entity: CandidatesToHire<T>
  ): UpdateRequestBuilder<CandidatesToHire<T>, T> {
    return new UpdateRequestBuilder<CandidatesToHire<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CandidatesToHire`.
   * @param dataAreaId Key property. See {@link CandidatesToHire.dataAreaId}.
   * @param candidateId Key property. See {@link CandidatesToHire.candidateId}.
   * @returns A request builder for creating requests that delete an entity of type `CandidatesToHire`.
   */
  delete(
    dataAreaId: string,
    candidateId: string
  ): DeleteRequestBuilder<CandidatesToHire<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CandidatesToHire`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CandidatesToHire` by taking the entity as a parameter.
   */
  delete(
    entity: CandidatesToHire<T>
  ): DeleteRequestBuilder<CandidatesToHire<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    candidateId?: string
  ): DeleteRequestBuilder<CandidatesToHire<T>, T> {
    return new DeleteRequestBuilder<CandidatesToHire<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CandidatesToHire
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CandidateId: candidateId!
          }
    );
  }
}
