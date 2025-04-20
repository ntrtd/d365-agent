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
import { BankAccountChangeProposalFieldEnablements } from './BankAccountChangeProposalFieldEnablements';
import { VendBankAccountChangeProposalFields } from './VendBankAccountChangeProposalFields';

/**
 * Request builder class for operations supported on the {@link BankAccountChangeProposalFieldEnablements} entity.
 */
export class BankAccountChangeProposalFieldEnablementsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BankAccountChangeProposalFieldEnablements<T>, T> {
  /**
   * Returns a request builder for querying all `BankAccountChangeProposalFieldEnablements` entities.
   * @returns A request builder for creating requests to retrieve all `BankAccountChangeProposalFieldEnablements` entities.
   */
  getAll(): GetAllRequestBuilder<
    BankAccountChangeProposalFieldEnablements<T>,
    T
  > {
    return new GetAllRequestBuilder<
      BankAccountChangeProposalFieldEnablements<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BankAccountChangeProposalFieldEnablements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BankAccountChangeProposalFieldEnablements`.
   */
  create(
    entity: BankAccountChangeProposalFieldEnablements<T>
  ): CreateRequestBuilder<BankAccountChangeProposalFieldEnablements<T>, T> {
    return new CreateRequestBuilder<
      BankAccountChangeProposalFieldEnablements<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `BankAccountChangeProposalFieldEnablements` entity based on its keys.
   * @param dataAreaId Key property. See {@link BankAccountChangeProposalFieldEnablements.dataAreaId}.
   * @param field Key property. See {@link BankAccountChangeProposalFieldEnablements.field}.
   * @returns A request builder for creating requests to retrieve one `BankAccountChangeProposalFieldEnablements` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    field: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.VendBankAccountChangeProposalFields'
    >
  ): GetByKeyRequestBuilder<BankAccountChangeProposalFieldEnablements<T>, T> {
    return new GetByKeyRequestBuilder<
      BankAccountChangeProposalFieldEnablements<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      Field: field
    });
  }

  /**
   * Returns a request builder for updating an entity of type `BankAccountChangeProposalFieldEnablements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BankAccountChangeProposalFieldEnablements`.
   */
  update(
    entity: BankAccountChangeProposalFieldEnablements<T>
  ): UpdateRequestBuilder<BankAccountChangeProposalFieldEnablements<T>, T> {
    return new UpdateRequestBuilder<
      BankAccountChangeProposalFieldEnablements<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `BankAccountChangeProposalFieldEnablements`.
   * @param dataAreaId Key property. See {@link BankAccountChangeProposalFieldEnablements.dataAreaId}.
   * @param field Key property. See {@link BankAccountChangeProposalFieldEnablements.field}.
   * @returns A request builder for creating requests that delete an entity of type `BankAccountChangeProposalFieldEnablements`.
   */
  delete(
    dataAreaId: string,
    field: VendBankAccountChangeProposalFields
  ): DeleteRequestBuilder<BankAccountChangeProposalFieldEnablements<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BankAccountChangeProposalFieldEnablements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BankAccountChangeProposalFieldEnablements` by taking the entity as a parameter.
   */
  delete(
    entity: BankAccountChangeProposalFieldEnablements<T>
  ): DeleteRequestBuilder<BankAccountChangeProposalFieldEnablements<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    field?: VendBankAccountChangeProposalFields
  ): DeleteRequestBuilder<BankAccountChangeProposalFieldEnablements<T>, T> {
    return new DeleteRequestBuilder<
      BankAccountChangeProposalFieldEnablements<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof BankAccountChangeProposalFieldEnablements
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Field: field!
          }
    );
  }
}
