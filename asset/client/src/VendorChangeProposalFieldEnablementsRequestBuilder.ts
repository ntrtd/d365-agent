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
import { VendorChangeProposalFieldEnablements } from './VendorChangeProposalFieldEnablements';
import { VendTableChangeProposalField } from './VendTableChangeProposalField';

/**
 * Request builder class for operations supported on the {@link VendorChangeProposalFieldEnablements} entity.
 */
export class VendorChangeProposalFieldEnablementsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendorChangeProposalFieldEnablements<T>, T> {
  /**
   * Returns a request builder for querying all `VendorChangeProposalFieldEnablements` entities.
   * @returns A request builder for creating requests to retrieve all `VendorChangeProposalFieldEnablements` entities.
   */
  getAll(): GetAllRequestBuilder<VendorChangeProposalFieldEnablements<T>, T> {
    return new GetAllRequestBuilder<VendorChangeProposalFieldEnablements<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VendorChangeProposalFieldEnablements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendorChangeProposalFieldEnablements`.
   */
  create(
    entity: VendorChangeProposalFieldEnablements<T>
  ): CreateRequestBuilder<VendorChangeProposalFieldEnablements<T>, T> {
    return new CreateRequestBuilder<VendorChangeProposalFieldEnablements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendorChangeProposalFieldEnablements` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendorChangeProposalFieldEnablements.dataAreaId}.
   * @param field Key property. See {@link VendorChangeProposalFieldEnablements.field}.
   * @returns A request builder for creating requests to retrieve one `VendorChangeProposalFieldEnablements` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    field: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.VendTableChangeProposalField'
    >
  ): GetByKeyRequestBuilder<VendorChangeProposalFieldEnablements<T>, T> {
    return new GetByKeyRequestBuilder<
      VendorChangeProposalFieldEnablements<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      Field: field
    });
  }

  /**
   * Returns a request builder for updating an entity of type `VendorChangeProposalFieldEnablements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendorChangeProposalFieldEnablements`.
   */
  update(
    entity: VendorChangeProposalFieldEnablements<T>
  ): UpdateRequestBuilder<VendorChangeProposalFieldEnablements<T>, T> {
    return new UpdateRequestBuilder<VendorChangeProposalFieldEnablements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendorChangeProposalFieldEnablements`.
   * @param dataAreaId Key property. See {@link VendorChangeProposalFieldEnablements.dataAreaId}.
   * @param field Key property. See {@link VendorChangeProposalFieldEnablements.field}.
   * @returns A request builder for creating requests that delete an entity of type `VendorChangeProposalFieldEnablements`.
   */
  delete(
    dataAreaId: string,
    field: VendTableChangeProposalField
  ): DeleteRequestBuilder<VendorChangeProposalFieldEnablements<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendorChangeProposalFieldEnablements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendorChangeProposalFieldEnablements` by taking the entity as a parameter.
   */
  delete(
    entity: VendorChangeProposalFieldEnablements<T>
  ): DeleteRequestBuilder<VendorChangeProposalFieldEnablements<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    field?: VendTableChangeProposalField
  ): DeleteRequestBuilder<VendorChangeProposalFieldEnablements<T>, T> {
    return new DeleteRequestBuilder<VendorChangeProposalFieldEnablements<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendorChangeProposalFieldEnablements
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Field: field!
          }
    );
  }
}
