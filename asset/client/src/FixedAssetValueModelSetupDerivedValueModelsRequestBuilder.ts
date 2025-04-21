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
import { FixedAssetValueModelSetupDerivedValueModels } from './FixedAssetValueModelSetupDerivedValueModels';
import { AssetTransType } from './AssetTransType';

/**
 * Request builder class for operations supported on the {@link FixedAssetValueModelSetupDerivedValueModels} entity.
 */
export class FixedAssetValueModelSetupDerivedValueModelsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FixedAssetValueModelSetupDerivedValueModels<T>, T> {
  /**
   * Returns a request builder for querying all `FixedAssetValueModelSetupDerivedValueModels` entities.
   * @returns A request builder for creating requests to retrieve all `FixedAssetValueModelSetupDerivedValueModels` entities.
   */
  getAll(): GetAllRequestBuilder<
    FixedAssetValueModelSetupDerivedValueModels<T>,
    T
  > {
    return new GetAllRequestBuilder<
      FixedAssetValueModelSetupDerivedValueModels<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `FixedAssetValueModelSetupDerivedValueModels` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FixedAssetValueModelSetupDerivedValueModels`.
   */
  create(
    entity: FixedAssetValueModelSetupDerivedValueModels<T>
  ): CreateRequestBuilder<FixedAssetValueModelSetupDerivedValueModels<T>, T> {
    return new CreateRequestBuilder<
      FixedAssetValueModelSetupDerivedValueModels<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `FixedAssetValueModelSetupDerivedValueModels` entity based on its keys.
   * @param dataAreaId Key property. See {@link FixedAssetValueModelSetupDerivedValueModels.dataAreaId}.
   * @param valueModelId Key property. See {@link FixedAssetValueModelSetupDerivedValueModels.valueModelId}.
   * @param derivedValueModelId Key property. See {@link FixedAssetValueModelSetupDerivedValueModels.derivedValueModelId}.
   * @param transactionType Key property. See {@link FixedAssetValueModelSetupDerivedValueModels.transactionType}.
   * @returns A request builder for creating requests to retrieve one `FixedAssetValueModelSetupDerivedValueModels` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    valueModelId: DeserializedType<T, 'Edm.String'>,
    derivedValueModelId: DeserializedType<T, 'Edm.String'>,
    transactionType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.AssetTransType'
    >
  ): GetByKeyRequestBuilder<FixedAssetValueModelSetupDerivedValueModels<T>, T> {
    return new GetByKeyRequestBuilder<
      FixedAssetValueModelSetupDerivedValueModels<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      ValueModelId: valueModelId,
      DerivedValueModelId: derivedValueModelId,
      TransactionType: transactionType
    });
  }

  /**
   * Returns a request builder for updating an entity of type `FixedAssetValueModelSetupDerivedValueModels`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FixedAssetValueModelSetupDerivedValueModels`.
   */
  update(
    entity: FixedAssetValueModelSetupDerivedValueModels<T>
  ): UpdateRequestBuilder<FixedAssetValueModelSetupDerivedValueModels<T>, T> {
    return new UpdateRequestBuilder<
      FixedAssetValueModelSetupDerivedValueModels<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `FixedAssetValueModelSetupDerivedValueModels`.
   * @param dataAreaId Key property. See {@link FixedAssetValueModelSetupDerivedValueModels.dataAreaId}.
   * @param valueModelId Key property. See {@link FixedAssetValueModelSetupDerivedValueModels.valueModelId}.
   * @param derivedValueModelId Key property. See {@link FixedAssetValueModelSetupDerivedValueModels.derivedValueModelId}.
   * @param transactionType Key property. See {@link FixedAssetValueModelSetupDerivedValueModels.transactionType}.
   * @returns A request builder for creating requests that delete an entity of type `FixedAssetValueModelSetupDerivedValueModels`.
   */
  delete(
    dataAreaId: string,
    valueModelId: string,
    derivedValueModelId: string,
    transactionType: AssetTransType
  ): DeleteRequestBuilder<FixedAssetValueModelSetupDerivedValueModels<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FixedAssetValueModelSetupDerivedValueModels`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FixedAssetValueModelSetupDerivedValueModels` by taking the entity as a parameter.
   */
  delete(
    entity: FixedAssetValueModelSetupDerivedValueModels<T>
  ): DeleteRequestBuilder<FixedAssetValueModelSetupDerivedValueModels<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    valueModelId?: string,
    derivedValueModelId?: string,
    transactionType?: AssetTransType
  ): DeleteRequestBuilder<FixedAssetValueModelSetupDerivedValueModels<T>, T> {
    return new DeleteRequestBuilder<
      FixedAssetValueModelSetupDerivedValueModels<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof FixedAssetValueModelSetupDerivedValueModels
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ValueModelId: valueModelId!,
            DerivedValueModelId: derivedValueModelId!,
            TransactionType: transactionType!
          }
    );
  }
}
