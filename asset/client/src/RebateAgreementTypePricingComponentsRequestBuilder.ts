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
import { RebateAgreementTypePricingComponents } from './RebateAgreementTypePricingComponents';

/**
 * Request builder class for operations supported on the {@link RebateAgreementTypePricingComponents} entity.
 */
export class RebateAgreementTypePricingComponentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RebateAgreementTypePricingComponents<T>, T> {
  /**
   * Returns a request builder for querying all `RebateAgreementTypePricingComponents` entities.
   * @returns A request builder for creating requests to retrieve all `RebateAgreementTypePricingComponents` entities.
   */
  getAll(): GetAllRequestBuilder<RebateAgreementTypePricingComponents<T>, T> {
    return new GetAllRequestBuilder<RebateAgreementTypePricingComponents<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RebateAgreementTypePricingComponents` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RebateAgreementTypePricingComponents`.
   */
  create(
    entity: RebateAgreementTypePricingComponents<T>
  ): CreateRequestBuilder<RebateAgreementTypePricingComponents<T>, T> {
    return new CreateRequestBuilder<RebateAgreementTypePricingComponents<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RebateAgreementTypePricingComponents` entity based on its keys.
   * @param dataAreaId Key property. See {@link RebateAgreementTypePricingComponents.dataAreaId}.
   * @param componentCodeName Key property. See {@link RebateAgreementTypePricingComponents.componentCodeName}.
   * @param typeName Key property. See {@link RebateAgreementTypePricingComponents.typeName}.
   * @returns A request builder for creating requests to retrieve one `RebateAgreementTypePricingComponents` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    componentCodeName: DeserializedType<T, 'Edm.String'>,
    typeName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RebateAgreementTypePricingComponents<T>, T> {
    return new GetByKeyRequestBuilder<
      RebateAgreementTypePricingComponents<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      ComponentCodeName: componentCodeName,
      TypeName: typeName
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RebateAgreementTypePricingComponents`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RebateAgreementTypePricingComponents`.
   */
  update(
    entity: RebateAgreementTypePricingComponents<T>
  ): UpdateRequestBuilder<RebateAgreementTypePricingComponents<T>, T> {
    return new UpdateRequestBuilder<RebateAgreementTypePricingComponents<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RebateAgreementTypePricingComponents`.
   * @param dataAreaId Key property. See {@link RebateAgreementTypePricingComponents.dataAreaId}.
   * @param componentCodeName Key property. See {@link RebateAgreementTypePricingComponents.componentCodeName}.
   * @param typeName Key property. See {@link RebateAgreementTypePricingComponents.typeName}.
   * @returns A request builder for creating requests that delete an entity of type `RebateAgreementTypePricingComponents`.
   */
  delete(
    dataAreaId: string,
    componentCodeName: string,
    typeName: string
  ): DeleteRequestBuilder<RebateAgreementTypePricingComponents<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RebateAgreementTypePricingComponents`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RebateAgreementTypePricingComponents` by taking the entity as a parameter.
   */
  delete(
    entity: RebateAgreementTypePricingComponents<T>
  ): DeleteRequestBuilder<RebateAgreementTypePricingComponents<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    componentCodeName?: string,
    typeName?: string
  ): DeleteRequestBuilder<RebateAgreementTypePricingComponents<T>, T> {
    return new DeleteRequestBuilder<RebateAgreementTypePricingComponents<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RebateAgreementTypePricingComponents
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ComponentCodeName: componentCodeName!,
            TypeName: typeName!
          }
    );
  }
}
