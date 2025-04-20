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
import { VendCorrectionNotes } from './VendCorrectionNotes';

/**
 * Request builder class for operations supported on the {@link VendCorrectionNotes} entity.
 */
export class VendCorrectionNotesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendCorrectionNotes<T>, T> {
  /**
   * Returns a request builder for querying all `VendCorrectionNotes` entities.
   * @returns A request builder for creating requests to retrieve all `VendCorrectionNotes` entities.
   */
  getAll(): GetAllRequestBuilder<VendCorrectionNotes<T>, T> {
    return new GetAllRequestBuilder<VendCorrectionNotes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `VendCorrectionNotes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendCorrectionNotes`.
   */
  create(
    entity: VendCorrectionNotes<T>
  ): CreateRequestBuilder<VendCorrectionNotes<T>, T> {
    return new CreateRequestBuilder<VendCorrectionNotes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendCorrectionNotes` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendCorrectionNotes.dataAreaId}.
   * @param correctionNoteId Key property. See {@link VendCorrectionNotes.correctionNoteId}.
   * @returns A request builder for creating requests to retrieve one `VendCorrectionNotes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    correctionNoteId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VendCorrectionNotes<T>, T> {
    return new GetByKeyRequestBuilder<VendCorrectionNotes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CorrectionNoteId: correctionNoteId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendCorrectionNotes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendCorrectionNotes`.
   */
  update(
    entity: VendCorrectionNotes<T>
  ): UpdateRequestBuilder<VendCorrectionNotes<T>, T> {
    return new UpdateRequestBuilder<VendCorrectionNotes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendCorrectionNotes`.
   * @param dataAreaId Key property. See {@link VendCorrectionNotes.dataAreaId}.
   * @param correctionNoteId Key property. See {@link VendCorrectionNotes.correctionNoteId}.
   * @returns A request builder for creating requests that delete an entity of type `VendCorrectionNotes`.
   */
  delete(
    dataAreaId: string,
    correctionNoteId: string
  ): DeleteRequestBuilder<VendCorrectionNotes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendCorrectionNotes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendCorrectionNotes` by taking the entity as a parameter.
   */
  delete(
    entity: VendCorrectionNotes<T>
  ): DeleteRequestBuilder<VendCorrectionNotes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    correctionNoteId?: string
  ): DeleteRequestBuilder<VendCorrectionNotes<T>, T> {
    return new DeleteRequestBuilder<VendCorrectionNotes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendCorrectionNotes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CorrectionNoteId: correctionNoteId!
          }
    );
  }
}
