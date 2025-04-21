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
import { RebateAndDeductionsPostingProfiles } from './RebateAndDeductionsPostingProfiles';
import { ModuleInventCustVend } from './ModuleInventCustVend';

/**
 * Request builder class for operations supported on the {@link RebateAndDeductionsPostingProfiles} entity.
 */
export class RebateAndDeductionsPostingProfilesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RebateAndDeductionsPostingProfiles<T>, T> {
  /**
   * Returns a request builder for querying all `RebateAndDeductionsPostingProfiles` entities.
   * @returns A request builder for creating requests to retrieve all `RebateAndDeductionsPostingProfiles` entities.
   */
  getAll(): GetAllRequestBuilder<RebateAndDeductionsPostingProfiles<T>, T> {
    return new GetAllRequestBuilder<RebateAndDeductionsPostingProfiles<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RebateAndDeductionsPostingProfiles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RebateAndDeductionsPostingProfiles`.
   */
  create(
    entity: RebateAndDeductionsPostingProfiles<T>
  ): CreateRequestBuilder<RebateAndDeductionsPostingProfiles<T>, T> {
    return new CreateRequestBuilder<RebateAndDeductionsPostingProfiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RebateAndDeductionsPostingProfiles` entity based on its keys.
   * @param dataAreaId Key property. See {@link RebateAndDeductionsPostingProfiles.dataAreaId}.
   * @param postingProfileModule Key property. See {@link RebateAndDeductionsPostingProfiles.postingProfileModule}.
   * @param postingProfileId Key property. See {@link RebateAndDeductionsPostingProfiles.postingProfileId}.
   * @param postingLegalEntityId Key property. See {@link RebateAndDeductionsPostingProfiles.postingLegalEntityId}.
   * @returns A request builder for creating requests to retrieve one `RebateAndDeductionsPostingProfiles` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    postingProfileModule: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.ModuleInventCustVend'
    >,
    postingProfileId: DeserializedType<T, 'Edm.String'>,
    postingLegalEntityId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RebateAndDeductionsPostingProfiles<T>, T> {
    return new GetByKeyRequestBuilder<RebateAndDeductionsPostingProfiles<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PostingProfileModule: postingProfileModule,
        PostingProfileId: postingProfileId,
        PostingLegalEntityId: postingLegalEntityId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RebateAndDeductionsPostingProfiles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RebateAndDeductionsPostingProfiles`.
   */
  update(
    entity: RebateAndDeductionsPostingProfiles<T>
  ): UpdateRequestBuilder<RebateAndDeductionsPostingProfiles<T>, T> {
    return new UpdateRequestBuilder<RebateAndDeductionsPostingProfiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RebateAndDeductionsPostingProfiles`.
   * @param dataAreaId Key property. See {@link RebateAndDeductionsPostingProfiles.dataAreaId}.
   * @param postingProfileModule Key property. See {@link RebateAndDeductionsPostingProfiles.postingProfileModule}.
   * @param postingProfileId Key property. See {@link RebateAndDeductionsPostingProfiles.postingProfileId}.
   * @param postingLegalEntityId Key property. See {@link RebateAndDeductionsPostingProfiles.postingLegalEntityId}.
   * @returns A request builder for creating requests that delete an entity of type `RebateAndDeductionsPostingProfiles`.
   */
  delete(
    dataAreaId: string,
    postingProfileModule: ModuleInventCustVend,
    postingProfileId: string,
    postingLegalEntityId: string
  ): DeleteRequestBuilder<RebateAndDeductionsPostingProfiles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RebateAndDeductionsPostingProfiles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RebateAndDeductionsPostingProfiles` by taking the entity as a parameter.
   */
  delete(
    entity: RebateAndDeductionsPostingProfiles<T>
  ): DeleteRequestBuilder<RebateAndDeductionsPostingProfiles<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    postingProfileModule?: ModuleInventCustVend,
    postingProfileId?: string,
    postingLegalEntityId?: string
  ): DeleteRequestBuilder<RebateAndDeductionsPostingProfiles<T>, T> {
    return new DeleteRequestBuilder<RebateAndDeductionsPostingProfiles<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RebateAndDeductionsPostingProfiles
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
