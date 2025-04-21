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
import { LaborUnionAgreements } from './LaborUnionAgreements';

/**
 * Request builder class for operations supported on the {@link LaborUnionAgreements} entity.
 */
export class LaborUnionAgreementsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LaborUnionAgreements<T>, T> {
  /**
   * Returns a request builder for querying all `LaborUnionAgreements` entities.
   * @returns A request builder for creating requests to retrieve all `LaborUnionAgreements` entities.
   */
  getAll(): GetAllRequestBuilder<LaborUnionAgreements<T>, T> {
    return new GetAllRequestBuilder<LaborUnionAgreements<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LaborUnionAgreements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LaborUnionAgreements`.
   */
  create(
    entity: LaborUnionAgreements<T>
  ): CreateRequestBuilder<LaborUnionAgreements<T>, T> {
    return new CreateRequestBuilder<LaborUnionAgreements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LaborUnionAgreements` entity based on its keys.
   * @param unionId Key property. See {@link LaborUnionAgreements.unionId}.
   * @param agreementName Key property. See {@link LaborUnionAgreements.agreementName}.
   * @param legalEntityId Key property. See {@link LaborUnionAgreements.legalEntityId}.
   * @returns A request builder for creating requests to retrieve one `LaborUnionAgreements` entity based on its keys.
   */
  getByKey(
    unionId: DeserializedType<T, 'Edm.String'>,
    agreementName: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LaborUnionAgreements<T>, T> {
    return new GetByKeyRequestBuilder<LaborUnionAgreements<T>, T>(
      this.entityApi,
      {
        UnionId: unionId,
        AgreementName: agreementName,
        LegalEntityId: legalEntityId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LaborUnionAgreements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LaborUnionAgreements`.
   */
  update(
    entity: LaborUnionAgreements<T>
  ): UpdateRequestBuilder<LaborUnionAgreements<T>, T> {
    return new UpdateRequestBuilder<LaborUnionAgreements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LaborUnionAgreements`.
   * @param unionId Key property. See {@link LaborUnionAgreements.unionId}.
   * @param agreementName Key property. See {@link LaborUnionAgreements.agreementName}.
   * @param legalEntityId Key property. See {@link LaborUnionAgreements.legalEntityId}.
   * @returns A request builder for creating requests that delete an entity of type `LaborUnionAgreements`.
   */
  delete(
    unionId: string,
    agreementName: string,
    legalEntityId: string
  ): DeleteRequestBuilder<LaborUnionAgreements<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LaborUnionAgreements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LaborUnionAgreements` by taking the entity as a parameter.
   */
  delete(
    entity: LaborUnionAgreements<T>
  ): DeleteRequestBuilder<LaborUnionAgreements<T>, T>;
  delete(
    unionIdOrEntity: any,
    agreementName?: string,
    legalEntityId?: string
  ): DeleteRequestBuilder<LaborUnionAgreements<T>, T> {
    return new DeleteRequestBuilder<LaborUnionAgreements<T>, T>(
      this.entityApi,
      unionIdOrEntity instanceof LaborUnionAgreements
        ? unionIdOrEntity
        : {
            UnionId: unionIdOrEntity!,
            AgreementName: agreementName!,
            LegalEntityId: legalEntityId!
          }
    );
  }
}
