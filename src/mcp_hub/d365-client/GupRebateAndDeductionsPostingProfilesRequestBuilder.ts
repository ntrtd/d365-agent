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
import { GupRebateAndDeductionsPostingProfiles } from './GupRebateAndDeductionsPostingProfiles';
import { ModuleInventCustVend } from './ModuleInventCustVend';

/**
 * Request builder class for operations supported on the {@link GupRebateAndDeductionsPostingProfiles} entity.
 */
export class GupRebateAndDeductionsPostingProfilesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<GupRebateAndDeductionsPostingProfiles<T>, T> {
  /**
   * Returns a request builder for querying all `GupRebateAndDeductionsPostingProfiles` entities.
   * @returns A request builder for creating requests to retrieve all `GupRebateAndDeductionsPostingProfiles` entities.
   */
  getAll(): GetAllRequestBuilder<GupRebateAndDeductionsPostingProfiles<T>, T> {
    return new GetAllRequestBuilder<
      GupRebateAndDeductionsPostingProfiles<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `GupRebateAndDeductionsPostingProfiles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `GupRebateAndDeductionsPostingProfiles`.
   */
  create(
    entity: GupRebateAndDeductionsPostingProfiles<T>
  ): CreateRequestBuilder<GupRebateAndDeductionsPostingProfiles<T>, T> {
    return new CreateRequestBuilder<
      GupRebateAndDeductionsPostingProfiles<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `GupRebateAndDeductionsPostingProfiles` entity based on its keys.
   * @param dataAreaId Key property. See {@link GupRebateAndDeductionsPostingProfiles.dataAreaId}.
   * @param postingProfileModule Key property. See {@link GupRebateAndDeductionsPostingProfiles.postingProfileModule}.
   * @param postingProfileId Key property. See {@link GupRebateAndDeductionsPostingProfiles.postingProfileId}.
   * @param postingLegalEntityId Key property. See {@link GupRebateAndDeductionsPostingProfiles.postingLegalEntityId}.
   * @returns A request builder for creating requests to retrieve one `GupRebateAndDeductionsPostingProfiles` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    postingProfileModule: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.ModuleInventCustVend'
    >,
    postingProfileId: DeserializedType<T, 'Edm.String'>,
    postingLegalEntityId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<GupRebateAndDeductionsPostingProfiles<T>, T> {
    return new GetByKeyRequestBuilder<
      GupRebateAndDeductionsPostingProfiles<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      PostingProfileModule: postingProfileModule,
      PostingProfileId: postingProfileId,
      PostingLegalEntityId: postingLegalEntityId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `GupRebateAndDeductionsPostingProfiles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `GupRebateAndDeductionsPostingProfiles`.
   */
  update(
    entity: GupRebateAndDeductionsPostingProfiles<T>
  ): UpdateRequestBuilder<GupRebateAndDeductionsPostingProfiles<T>, T> {
    return new UpdateRequestBuilder<
      GupRebateAndDeductionsPostingProfiles<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `GupRebateAndDeductionsPostingProfiles`.
   * @param dataAreaId Key property. See {@link GupRebateAndDeductionsPostingProfiles.dataAreaId}.
   * @param postingProfileModule Key property. See {@link GupRebateAndDeductionsPostingProfiles.postingProfileModule}.
   * @param postingProfileId Key property. See {@link GupRebateAndDeductionsPostingProfiles.postingProfileId}.
   * @param postingLegalEntityId Key property. See {@link GupRebateAndDeductionsPostingProfiles.postingLegalEntityId}.
   * @returns A request builder for creating requests that delete an entity of type `GupRebateAndDeductionsPostingProfiles`.
   */
  delete(
    dataAreaId: string,
    postingProfileModule: ModuleInventCustVend,
    postingProfileId: string,
    postingLegalEntityId: string
  ): DeleteRequestBuilder<GupRebateAndDeductionsPostingProfiles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `GupRebateAndDeductionsPostingProfiles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `GupRebateAndDeductionsPostingProfiles` by taking the entity as a parameter.
   */
  delete(
    entity: GupRebateAndDeductionsPostingProfiles<T>
  ): DeleteRequestBuilder<GupRebateAndDeductionsPostingProfiles<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    postingProfileModule?: ModuleInventCustVend,
    postingProfileId?: string,
    postingLegalEntityId?: string
  ): DeleteRequestBuilder<GupRebateAndDeductionsPostingProfiles<T>, T> {
    return new DeleteRequestBuilder<
      GupRebateAndDeductionsPostingProfiles<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof GupRebateAndDeductionsPostingProfiles
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PostingProfileModule: postingProfileModule!,
            PostingProfileId: postingProfileId!,
            PostingLegalEntityId: postingLegalEntityId!
          }
    );
  }
}
