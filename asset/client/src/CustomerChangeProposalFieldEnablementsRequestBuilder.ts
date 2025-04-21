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
import { CustomerChangeProposalFieldEnablements } from './CustomerChangeProposalFieldEnablements';
import { CustTableChangeProposalField } from './CustTableChangeProposalField';

/**
 * Request builder class for operations supported on the {@link CustomerChangeProposalFieldEnablements} entity.
 */
export class CustomerChangeProposalFieldEnablementsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomerChangeProposalFieldEnablements<T>, T> {
  /**
   * Returns a request builder for querying all `CustomerChangeProposalFieldEnablements` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerChangeProposalFieldEnablements` entities.
   */
  getAll(): GetAllRequestBuilder<CustomerChangeProposalFieldEnablements<T>, T> {
    return new GetAllRequestBuilder<
      CustomerChangeProposalFieldEnablements<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CustomerChangeProposalFieldEnablements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerChangeProposalFieldEnablements`.
   */
  create(
    entity: CustomerChangeProposalFieldEnablements<T>
  ): CreateRequestBuilder<CustomerChangeProposalFieldEnablements<T>, T> {
    return new CreateRequestBuilder<
      CustomerChangeProposalFieldEnablements<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CustomerChangeProposalFieldEnablements` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustomerChangeProposalFieldEnablements.dataAreaId}.
   * @param field Key property. See {@link CustomerChangeProposalFieldEnablements.field}.
   * @returns A request builder for creating requests to retrieve one `CustomerChangeProposalFieldEnablements` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    field: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.CustTableChangeProposalField'
    >
  ): GetByKeyRequestBuilder<CustomerChangeProposalFieldEnablements<T>, T> {
    return new GetByKeyRequestBuilder<
      CustomerChangeProposalFieldEnablements<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      Field: field
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerChangeProposalFieldEnablements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerChangeProposalFieldEnablements`.
   */
  update(
    entity: CustomerChangeProposalFieldEnablements<T>
  ): UpdateRequestBuilder<CustomerChangeProposalFieldEnablements<T>, T> {
    return new UpdateRequestBuilder<
      CustomerChangeProposalFieldEnablements<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerChangeProposalFieldEnablements`.
   * @param dataAreaId Key property. See {@link CustomerChangeProposalFieldEnablements.dataAreaId}.
   * @param field Key property. See {@link CustomerChangeProposalFieldEnablements.field}.
   * @returns A request builder for creating requests that delete an entity of type `CustomerChangeProposalFieldEnablements`.
   */
  delete(
    dataAreaId: string,
    field: CustTableChangeProposalField
  ): DeleteRequestBuilder<CustomerChangeProposalFieldEnablements<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerChangeProposalFieldEnablements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerChangeProposalFieldEnablements` by taking the entity as a parameter.
   */
  delete(
    entity: CustomerChangeProposalFieldEnablements<T>
  ): DeleteRequestBuilder<CustomerChangeProposalFieldEnablements<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    field?: CustTableChangeProposalField
  ): DeleteRequestBuilder<CustomerChangeProposalFieldEnablements<T>, T> {
    return new DeleteRequestBuilder<
      CustomerChangeProposalFieldEnablements<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustomerChangeProposalFieldEnablements
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Field: field!
          }
    );
  }
}
