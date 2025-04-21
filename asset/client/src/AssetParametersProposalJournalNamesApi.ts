/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetParametersProposalJournalNames } from './AssetParametersProposalJournalNames';
import { AssetParametersProposalJournalNamesRequestBuilder } from './AssetParametersProposalJournalNamesRequestBuilder';
import { JournalNamesApi } from './JournalNamesApi';
import { AssetParametersApi } from './AssetParametersApi';
import { CurrentOperationsTax } from './CurrentOperationsTax';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class AssetParametersProposalJournalNamesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      AssetParametersProposalJournalNames<DeSerializersT>,
      DeSerializersT
    >
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): AssetParametersProposalJournalNamesApi<DeSerializersT> {
    return new AssetParametersProposalJournalNamesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link assetParameterProposalJournalName} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_PARAMETER_PROPOSAL_JOURNAL_NAME: OneToOneLink<
      AssetParametersProposalJournalNames<DeSerializersT>,
      DeSerializersT,
      JournalNamesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetParameterProposalJournalNameParameters} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_PARAMETER_PROPOSAL_JOURNAL_NAME_PARAMETERS: OneToOneLink<
      AssetParametersProposalJournalNames<DeSerializersT>,
      DeSerializersT,
      AssetParametersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      JournalNamesApi<DeSerializersT>,
      AssetParametersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      ASSET_PARAMETER_PROPOSAL_JOURNAL_NAME: new OneToOneLink(
        'AssetParameterProposalJournalName',
        this,
        linkedApis[0]
      ),
      ASSET_PARAMETER_PROPOSAL_JOURNAL_NAME_PARAMETERS: new OneToOneLink(
        'AssetParameterProposalJournalNameParameters',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = AssetParametersProposalJournalNames;

  requestBuilder(): AssetParametersProposalJournalNamesRequestBuilder<DeSerializersT> {
    return new AssetParametersProposalJournalNamesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    AssetParametersProposalJournalNames<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      AssetParametersProposalJournalNames<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetParametersProposalJournalNames<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof AssetParametersProposalJournalNames,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetParametersProposalJournalNames,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetParametersProposalJournalNames<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ASSET_PARAMETERS: OrderableEdmTypeField<
      AssetParametersProposalJournalNames<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    POSTING_TYPE: EnumField<
      AssetParametersProposalJournalNames<DeSerializers>,
      DeSerializersT,
      CurrentOperationsTax,
      true,
      true
    >;
    JOURNAL_NAME: OrderableEdmTypeField<
      AssetParametersProposalJournalNames<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetParameterProposalJournalName} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_PARAMETER_PROPOSAL_JOURNAL_NAME: OneToOneLink<
      AssetParametersProposalJournalNames<DeSerializersT>,
      DeSerializersT,
      JournalNamesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link assetParameterProposalJournalNameParameters} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ASSET_PARAMETER_PROPOSAL_JOURNAL_NAME_PARAMETERS: OneToOneLink<
      AssetParametersProposalJournalNames<DeSerializersT>,
      DeSerializersT,
      AssetParametersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AssetParametersProposalJournalNames<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link assetParameters} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_PARAMETERS: fieldBuilder.buildEdmTypeField(
          'AssetParameters',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link postingType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_TYPE: fieldBuilder.buildEnumField(
          'PostingType',
          CurrentOperationsTax,
          true
        ),
        /**
         * Static representation of the {@link journalName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNAL_NAME: fieldBuilder.buildEdmTypeField(
          'JournalName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetParametersProposalJournalNames)
      };
    }

    return this._schema;
  }
}
