/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WithholdingGroupDatas } from './WithholdingGroupDatas';
import { WithholdingGroupDatasRequestBuilder } from './WithholdingGroupDatasRequestBuilder';
import { WithholdingTaxCodesApi } from './WithholdingTaxCodesApi';
import { WithholdingGroupsApi } from './WithholdingGroupsApi';
import { NoYes } from './NoYes';
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
export class WithholdingGroupDatasApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WithholdingGroupDatas<DeSerializersT>, DeSerializersT>
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
  ): WithholdingGroupDatasApi<DeSerializersT> {
    return new WithholdingGroupDatasApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link withholdingTaxCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WITHHOLDING_TAX_CODE: OneToOneLink<
      WithholdingGroupDatas<DeSerializersT>,
      DeSerializersT,
      WithholdingTaxCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link withholdingGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WITHHOLDING_GROUP: OneToOneLink<
      WithholdingGroupDatas<DeSerializersT>,
      DeSerializersT,
      WithholdingGroupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      WithholdingTaxCodesApi<DeSerializersT>,
      WithholdingGroupsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      WITHHOLDING_TAX_CODE: new OneToOneLink(
        'WithholdingTaxCode',
        this,
        linkedApis[0]
      ),
      WITHHOLDING_GROUP: new OneToOneLink(
        'WithholdingGroup',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = WithholdingGroupDatas;

  requestBuilder(): WithholdingGroupDatasRequestBuilder<DeSerializersT> {
    return new WithholdingGroupDatasRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WithholdingGroupDatas<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<WithholdingGroupDatas<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WithholdingGroupDatas<DeSerializersT>,
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
    typeof WithholdingGroupDatas,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WithholdingGroupDatas,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      WithholdingGroupDatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WITHHOLDING_TAX_GROUP_ID: OrderableEdmTypeField<
      WithholdingGroupDatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WITHHOLDING_TAX_CODE_ID: OrderableEdmTypeField<
      WithholdingGroupDatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OVERLOOK_THRESHOLD: EnumField<
      WithholdingGroupDatas<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXEMPT: EnumField<
      WithholdingGroupDatas<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link withholdingTaxCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WITHHOLDING_TAX_CODE: OneToOneLink<
      WithholdingGroupDatas<DeSerializersT>,
      DeSerializersT,
      WithholdingTaxCodesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link withholdingGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WITHHOLDING_GROUP: OneToOneLink<
      WithholdingGroupDatas<DeSerializersT>,
      DeSerializersT,
      WithholdingGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WithholdingGroupDatas<DeSerializers>>;
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
         * Static representation of the {@link withholdingTaxGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_TAX_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'WithholdingTaxGroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link withholdingTaxCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_TAX_CODE_ID: fieldBuilder.buildEdmTypeField(
          'WithholdingTaxCodeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link overlookThreshold} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OVERLOOK_THRESHOLD: fieldBuilder.buildEnumField(
          'OverlookThreshold',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link exempt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXEMPT: fieldBuilder.buildEnumField('Exempt', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WithholdingGroupDatas)
      };
    }

    return this._schema;
  }
}
